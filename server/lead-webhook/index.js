/**
 * Lead webhook — Telegram + YouGile
 * Deploy as Cloudflare Worker (wrangler) or any serverless runtime with fetch handler.
 *
 * Env vars: TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID, YOUGILE_API_KEY, YOUGILE_COLUMN_ID, CORS_ORIGIN
 */

const YOUGILE_API = 'https://ru.yougile.com/api-v2';

function corsHeaders(origin, env) {
  const allowed = (env.CORS_ORIGIN || '*').split(',').map((s) => s.trim());
  const ok = allowed.includes('*') || allowed.includes(origin);
  return {
    'Access-Control-Allow-Origin': ok ? origin || '*' : allowed[0] || '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Accept',
    'Access-Control-Max-Age': '86400',
  };
}

function json(data, status, extraHeaders) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json', ...extraHeaders },
  });
}

function taskTitle(payload) {
  const phone = payload.phoneDisplay || payload.phone || '—';
  const desc = (payload.description || '').trim();
  const short = desc ? (desc.length > 60 ? desc.slice(0, 57) + '…' : desc) : 'без описания';
  return `[Лендинг] ${phone} — ${short}`;
}

function taskDescription(payload) {
  const lines = [
    '**Лид с лендинга организаторов**',
    '',
    `📞 Телефон: ${payload.phoneDisplay || payload.phone}`,
  ];
  if (payload.name) lines.push(`👤 Имя: ${payload.name}`);
  if (payload.description) lines.push(`💬 Сообщение: ${payload.description}`);
  lines.push(`🌐 Язык: ${payload.locale || '—'}`);
  lines.push(`📍 Источник: ${payload.source || '—'}`);
  lines.push(`🔗 Страница: ${payload.page || '—'}`);
  if (payload.submittedAt) lines.push(`🕐 ${payload.submittedAt}`);
  return lines.join('\n');
}

function telegramText(payload) {
  const lines = [
    '🆕 *Лид с лендинга*',
    '',
    `📞 \`${payload.phoneDisplay || payload.phone}\``,
  ];
  if (payload.name) lines.push(`👤 ${payload.name}`);
  if (payload.description) lines.push(`💬 ${payload.description}`);
  lines.push(`🌐 ${payload.locale || '—'} · 📍 ${payload.source || '—'}`);
  return lines.join('\n');
}

async function sendTelegram(env, text) {
  const token = env.TELEGRAM_BOT_TOKEN;
  const chatId = env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    return { ok: false, skipped: true, reason: 'telegram_not_configured' };
  }
  const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      parse_mode: 'Markdown',
      disable_web_page_preview: true,
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.ok) {
    throw new Error('Telegram: ' + (data.description || res.status));
  }
  return { ok: true, messageId: data.result && data.result.message_id };
}

async function createYouGileTask(env, payload) {
  const apiKey = env.YOUGILE_API_KEY;
  const columnId = env.YOUGILE_COLUMN_ID;
  if (!apiKey || !columnId) {
    return { ok: false, skipped: true, reason: 'yougile_not_configured' };
  }
  const res = await fetch(`${YOUGILE_API}/tasks`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      title: taskTitle(payload),
      columnId,
      description: taskDescription(payload),
    }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error('YouGile: ' + (data.error || data.message || res.status));
  }
  return { ok: true, taskId: data.id || data.taskId };
}

async function handlePost(request, env) {
  let body;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Invalid JSON' }, 400);
  }

  const phone = String(body.phone || '').trim();
  if (!phone || phone.length < 9) {
    return json({ error: 'Phone required' }, 422);
  }

  const payload = {
    phone,
    phoneDisplay: body.phoneDisplay || phone,
    name: String(body.name || '').trim(),
    description: String(body.description || '').trim(),
    locale: String(body.locale || 'ru').slice(0, 8),
    source: String(body.source || 'unknown').slice(0, 64),
    page: String(body.page || '').slice(0, 512),
    submittedAt: body.submittedAt || new Date().toISOString(),
  };

  const results = { telegram: null, yougile: null };
  const errors = [];

  await Promise.all([
    sendTelegram(env, telegramText(payload))
      .then((r) => {
        results.telegram = r;
      })
      .catch((e) => {
        errors.push(String(e.message || e));
      }),
    createYouGileTask(env, payload)
      .then((r) => {
        results.yougile = r;
      })
      .catch((e) => {
        errors.push(String(e.message || e));
      }),
  ]);

  const tgOk = results.telegram && (results.telegram.ok || results.telegram.skipped);
  const ygOk = results.yougile && (results.yougile.ok || results.yougile.skipped);
  const tgConfigured = results.telegram && !results.telegram.skipped;
  const ygConfigured = results.yougile && !results.yougile.skipped;

  if (errors.length && (tgConfigured || ygConfigured)) {
    return json({ error: 'Integration failed', details: errors, results }, 502);
  }

  if (!tgOk && !ygOk) {
    return json({ error: 'No integrations configured' }, 503);
  }

  return json({ ok: true, results }, 200);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin, env);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== 'POST') {
      return json({ error: 'Method not allowed' }, 405, headers);
    }

    try {
      const res = await handlePost(request, env);
      Object.entries(headers).forEach(([k, v]) => res.headers.set(k, v));
      return res;
    } catch (e) {
      return json({ error: String(e.message || e) }, 500, headers);
    }
  },
};
