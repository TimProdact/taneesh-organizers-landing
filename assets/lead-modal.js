/* Taneesh organizers landing — lead capture modal */
window.TaneeshLeadModal = (function () {
  const FOCUSABLE =
    'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

  let overlay = null;
  let dialog = null;
  let form = null;
  let phoneInput = null;
  let nameInput = null;
  let descInput = null;
  let submitBtn = null;
  let errorEl = null;
  let successEl = null;
  let formView = null;
  let lastFocus = null;

  function t() {
    return (window.TaneeshI18n && window.TaneeshI18n.t()) || {};
  }

  function webhookUrl() {
    const cfg = window.TaneeshLeadConfig || {};
    return (cfg.webhookUrl || '').trim();
  }

  function normalizePhone(raw) {
    const digits = String(raw || '').replace(/\D/g, '');
    if (digits.length === 12 && digits.startsWith('998')) return '+' + digits;
    if (digits.length === 9 && digits.startsWith('9')) return '+998' + digits;
    return null;
  }

  function formatPhoneDisplay(e164) {
    const d = e164.replace(/\D/g, '').slice(3);
    if (d.length !== 9) return e164;
    return '+998 ' + d.slice(0, 2) + ' ' + d.slice(2, 5) + ' ' + d.slice(5, 7) + ' ' + d.slice(7);
  }

  function setLoading(on) {
    if (!submitBtn) return;
    submitBtn.disabled = on;
    submitBtn.classList.toggle('is-loading', on);
    submitBtn.setAttribute('aria-busy', on ? 'true' : 'false');
  }

  function showError(msg) {
    if (!errorEl || !formView || !successEl) return;
    errorEl.textContent = msg;
    errorEl.hidden = false;
    successEl.hidden = true;
    formView.hidden = false;
  }

  function showSuccess() {
    if (!errorEl || !formView || !successEl) return;
    errorEl.hidden = true;
    formView.hidden = true;
    successEl.hidden = false;
  }

  function resetForm() {
    if (!form) return;
    form.reset();
    if (errorEl) errorEl.hidden = true;
    if (formView) formView.hidden = false;
    if (successEl) successEl.hidden = true;
    setLoading(false);
  }

  function trapFocus(e) {
    if (!dialog || e.key !== 'Tab') return;
    const nodes = dialog.querySelectorAll(FOCUSABLE);
    if (!nodes.length) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function open(source) {
    if (!overlay || !dialog) return;
    lastFocus = document.activeElement;
    resetForm();
    overlay.hidden = false;
    overlay.removeAttribute('inert');
    document.body.classList.add('lead-modal-open');
    dialog.dataset.leadSource = source || 'unknown';
    requestAnimationFrame(() => {
      overlay.classList.add('is-visible');
      if (phoneInput) phoneInput.focus();
    });
  }

  function close() {
    if (!overlay) return;
    overlay.classList.remove('is-visible');
    document.body.classList.remove('lead-modal-open');
    setTimeout(() => {
      overlay.hidden = true;
      overlay.setAttribute('inert', '');
      resetForm();
      if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
    }, 200);
  }

  async function submit(e) {
    e.preventDefault();
    const d = t();
    const phone = normalizePhone(phoneInput && phoneInput.value);
    if (!phone) {
      showError(d.leadPhoneError || 'Enter a valid phone number');
      if (phoneInput) phoneInput.focus();
      return;
    }

    const url = webhookUrl();
    if (!url) {
      showError(d.leadErrorConfig || 'Form is not configured yet. Please call us.');
      return;
    }

    const payload = {
      phone,
      phoneDisplay: formatPhoneDisplay(phone),
      name: (nameInput && nameInput.value.trim()) || '',
      description: (descInput && descInput.value.trim()) || '',
      locale: (window.TaneeshI18n && window.TaneeshI18n.locale) || 'ru',
      source: (dialog && dialog.dataset.leadSource) || 'unknown',
      page: location.href,
      submittedAt: new Date().toISOString(),
    };

    setLoading(true);
    if (errorEl) errorEl.hidden = true;

    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const body = await res.text().catch(() => '');
        throw new Error(body || 'HTTP ' + res.status);
      }
      showSuccess();
      trackLead(payload);
    } catch (_) {
      showError(d.leadErrorText || 'Something went wrong. Try again or call us.');
    } finally {
      setLoading(false);
    }
  }

  function trackLead(payload) {
    try {
      if (window.ym && window.ym.a) {
        window.ym(analyticsCounterId(), 'reachGoal', 'lead_form', {
          phone: payload.phone,
          source: payload.source,
        });
      }
    } catch (_) {}
    try {
      if (window.fbq) {
        window.fbq('track', 'Lead', {
          content_name: 'lead_form',
          source: payload.source,
        });
      }
    } catch (_) {}
  }

  function analyticsCounterId() {
    try {
      return Number(window.TaneeshAnalytics && window.TaneeshAnalytics.metrikaId);
    } catch (_) {
      return 0;
    }
  }

  function bindTriggers() {
    document.querySelectorAll('[data-lead-modal]').forEach((el) => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        open(el.getAttribute('data-lead-source') || el.getAttribute('data-i18n') || 'cta');
      });
    });
  }

  function init() {
    overlay = document.getElementById('leadModal');
    if (!overlay) return;
    if (overlay.hidden) overlay.setAttribute('inert', '');
    dialog = overlay.querySelector('.lead-dialog');
    form = document.getElementById('leadForm');
    phoneInput = document.getElementById('leadPhone');
    nameInput = document.getElementById('leadName');
    descInput = document.getElementById('leadDesc');
    submitBtn = document.getElementById('leadSubmit');
    errorEl = document.getElementById('leadError');
    successEl = document.getElementById('leadSuccess');
    formView = document.getElementById('leadFormView');

    overlay.querySelectorAll('[data-lead-close]').forEach((btn) => {
      btn.addEventListener('click', close);
    });
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', (e) => {
      if (!overlay.hidden && e.key === 'Escape') close();
      if (!overlay.hidden) trapFocus(e);
    });

    if (form) form.addEventListener('submit', submit);
    bindTriggers();
    window.addEventListener('taneesh:locale', () => {
      if (window.TaneeshI18n) window.TaneeshI18n.apply();
    });
  }

  return { init, open, close, normalizePhone };
})();
