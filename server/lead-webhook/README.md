# Lead webhook (Telegram + YouGile)

Serverless endpoint for the organizers landing lead form. Keeps bot tokens and YouGile API keys off the static site.

## Deploy (Cloudflare Workers)

```bash
cd docs/landing-plus/server/lead-webhook
cp wrangler.toml.example wrangler.toml
npx wrangler secret put TELEGRAM_BOT_TOKEN
npx wrangler secret put TELEGRAM_CHAT_ID
npx wrangler secret put YOUGILE_API_KEY
npx wrangler secret put YOUGILE_COLUMN_ID
npx wrangler deploy
```

Copy the worker URL into `assets/lead-config.js`:

```js
window.TaneeshLeadConfig = {
  webhookUrl: 'https://taneesh-lead-webhook.<account>.workers.dev',
};
```

## YouGile column ID

1. Open board **B2B sales** → project **Taneesh** → column **Лид**
2. Use YouGile API `GET /api-v2/columns?boardId=...` or inspect network when moving a task
3. Set `YOUGILE_COLUMN_ID` to that UUID

## Task format

- **Title:** `[Лендинг] +998 90 123 45 67 — описание`
- **Column:** Лид (via `YOUGILE_COLUMN_ID`)
- **Description:** phone, name, message, locale, source, page URL

## Request body

```json
{
  "phone": "+998901234567",
  "phoneDisplay": "+998 90 123 45 67",
  "name": "Алина",
  "description": "Стендап на 200 мест",
  "locale": "ru",
  "source": "heroCta",
  "page": "https://timprodact.github.io/taneesh-organizers-landing/"
}
```
