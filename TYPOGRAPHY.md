# Типографика и отступы — landing-plus

Единая система для `index.html`. Все новые блоки должны использовать токены из `:root`, а не «магические» числа.

## Шрифты

| Роль | Переменная | Шрифт | Где |
|------|------------|-------|-----|
| Display | `--font-display` | Instrument Serif | `h1`, `h2`, `h3`, цитаты, крупные цифры в калькуляторах |
| UI / body | `--font-ui` | Outfit | body, `.lead`, `.eyebrow`, кнопки, FAQ, подписи |

**Правило:** заголовки секций — только Instrument Serif. Outfit — для всего интерактива и текста абзацев.

## Шкала размеров

| Токен | Значение | Назначение |
|-------|----------|------------|
| `--text-display-xl` | clamp(40px → 72px) | `h1`, hero |
| `--text-display-lg` | clamp(32px → 52px) | `h2`, заголовки секций |
| `--text-display-md` | clamp(28px → 40px) | вторичные display-блоки (CTA, soft calc) |
| `--text-display-sm` | clamp(26px → 34px) | `h3`, заголовки карточек |
| `--text-display-xs` | clamp(22px → 28px) | крупные числа в summary |
| `--text-quote` | clamp(24px → 36px) | блок `.quote-text` |
| `--text-lead` | clamp(16px → 19px) | `.lead` под заголовком |
| `--text-body` | 15px | основной текст, body |
| `--text-body-sm` | 14px | вторичный текст на карточках |
| `--text-caption` | 13px | `.eyebrow`, метки, подписи calc |
| `--text-micro` | 12px | мелкие метки (`.k` в summary) |

## Начертания

| Токен | Weight |
|-------|--------|
| `--weight-display` | 400 |
| `--weight-regular` | 400 |
| `--weight-medium` | 500 |
| `--weight-semibold` | 600 |
| `--weight-bold` | 700 |
| `--weight-heavy` | 800 |

## Межстрочный интервал и трекинг

- Display-заголовки: `--leading-display` (1.08), `--track-display` (−0.03em)
- `h3` / card titles: `--leading-tight`, `--track-heading` (−0.02em)
- Body / lead: `--leading-body` (1.5) / `--leading-relaxed` (1.55) / `--leading-loose` (1.65)
- Eyebrow: `--track-eyebrow` (0.06em), uppercase

## Отступы

| Токен | Значение | Назначение |
|-------|----------|------------|
| `--space-section-y` / `--pad-y` | clamp(100px → 160px) | вертикальный padding секций `.section` |
| `--space-head-content` / `--section-head-gap` | 48px | от `.section-head` до контента |
| `--space-title-lead` | 16px | между `h2` и `.lead` |
| `--space-eyebrow-title` | 16px | между `.eyebrow` и заголовком |
| `--space-hero-title` | 28px | hero: h1 → lead |
| `--space-hero-lead` | 40px | hero: lead → кнопки |
| `--space-hero-bottom` | clamp(64px → 80px) | hero copy → mock |
| `--space-island` | clamp(32px → 48px) | padding `.island` |
| `--space-stack-sm/md/lg/xl` | 12 / 16 / 24 / 32px | локальные стеки |

## Паттерн секции

Каждый крупный блок на лендинге:

```html
<section class="section" id="…">
  <div class="wrap">
    <div class="section-head">
      <span class="eyebrow" data-i18n="…Eyebrow">…</span>
      <h2 data-i18n="…Title">…</h2>
      <p class="lead" data-i18n="…Lead">…</p> <!-- опционально -->
    </div>
    <!-- контент -->
  </div>
</section>
```

**Исключения (осознанные):**
- Hero — eyebrow + h1 + lead без `.section-head`
- Quote — eyebrow внутри `.quote-block`, цитата как display
- Paytrust — eyebrow + h3 внутри `.island` (компактная полоса)
- Flow pitch — h2 + `.lead` внутри карточки, не дублирует section-head

## Компоненты

| Класс | Описание |
|-------|----------|
| `.eyebrow` | Kicker секции, Outfit 13px bold uppercase |
| `.lead` | Подзаголовок, muted, max-width ~34em, по центру в `.section-head` |
| `.card-title` | Display-заголовок карточки (или `h3` на фото-картах) |
| `.type-caption` | Мuted подпись 13px semibold |
| `.type-stat` | Display-число в summary |

## Карточки с фото

Заголовок — `h3` (наследует базовый стиль) или `strong.card-title` в niche-rail.  
Подпись — `--text-body-sm`, line-height `--leading-snug`.  
Не дублировать font-family/size в каждой карточке — только цвет и margin.

## FAQ

- `.section-head`: eyebrow + h2
- Вопрос (`summary`): Outfit 17px semibold
- Ответ (`.faq-a`): `--text-body`, `--leading-loose`

## Калькуляторы

- Метки: `--text-caption`, `--weight-bold`
- Крупные числа: Instrument Serif (display tokens)
- Summary `.k`: `--text-micro`; `.v`: `--text-display-xs`

## Чеклист перед merge

- [ ] Нет локальных `font-size: 26px` / `clamp(...)` у h2/h3 без причины
- [ ] Секция использует `.section-head` + 48px gap
- [ ] Lead — класс `.lead`, не кастомный `.flow-lead` / `.quote-badge`
- [ ] Display-текст — Instrument Serif, UI — Outfit
