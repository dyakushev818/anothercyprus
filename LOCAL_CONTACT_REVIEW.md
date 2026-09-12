# Local contact-measurement review — 2026-09-12

Scope: local review only. No deployment or external analytics configuration was performed for this review.

## Changes now present locally

- Contact actions use the custom `contact_click` event, not `generate_lead`.
- Only non-personal parameters are sent: `contact_channel`, `project_id`, and `page_type`.
- `generate_lead` is not emitted for a WhatsApp, email, or telephone click. A contact click is an intent signal, not a received or qualified enquiry.
- The React portfolio path (`src/utils/analytics.ts`) checks that stored consent is exactly `accepted` before it attempts measurement. It reads local storage first and session storage only as a fallback.
- The consent read and `gtag` call are both fail-open: an unavailable storage API or analytics exception is swallowed, so the commercial contact action can continue.
- The consent banner reads and writes storage inside `try/catch`. If persistent storage is unavailable, it uses session storage; if both stores are unavailable, it keeps the selection in component memory for the current visit. No consent is granted by default.
- The static property-page generator has the same consent gate and fail-open wrapper around its `contact_click` call.

## Contact paths and single-event review

- Normal WhatsApp, `mailto:`, and `tel:` links are handled once by the document click listener.
- The React inquiry modal opens WhatsApp programmatically; it has one explicit `trackContactClick` call and no anchor click to duplicate it.
- The static property form also opens WhatsApp programmatically; it has one explicit `trackContact('whatsapp')` call and no anchor click to duplicate it.
- Payloads do not include the name, phone number, email address, message, or UTM/referrer text that is placed in the visitor's WhatsApp draft.

## Consent cases

| State | Measurement result |
| --- | --- |
| `accepted` | One `contact_click` may be sent. |
| `declined`, missing, or another value | No contact event is sent. |
| Storage access throws | Session storage is tried. If unavailable too, no contact event is sent; the contact action continues. |
| `gtag` throws or is unavailable | No contact event is sent; the contact action continues. |

## Verification performed

- `npm run lint` completed successfully after the fail-open change.
- Runtime checks in `scripts/contact-analytics.test.mjs` passed: accepted consent emits one safe event; declined or absent consent emits none; storage and `gtag` failures do not throw.
- Source search confirms no active `trackLead`, `generate_lead`, `lead_channel`, or `property_name` call remains in the contact tracking paths.
- The static-property generator was run locally with Node's built-in TypeScript stripping. Sample EN/RU OLiO output contains one `contact_click` handler, the fail-open `trackContact` wrapper, and the owner email; it contains no old `generate_lead` or `lead_channel` fields.
- `git diff --check` completed without whitespace errors. Existing unrelated guide and sitemap changes were left untouched.
- Независимая локальная проверка позже успешно выполнила `npm run build` без публикации. Она также повторно проверила все 8 EN/RU сгенерированных страниц объектов по пяти сценариям и выполнила 10 проверок выходного HTML. Два устаревших URL Dasoudi подтверждены как редиректы на OLiO, а не как контактные формы.
- Ранее в этой сессии `npm run build` останавливался на старте `tsx` с `uv_os_get_passwd returned ENOMEM`; это было ограничением конкретного процесса, а не ошибкой проекта. Повторную сборку после независимой успешной проверки не запускали.

## Still unknown / not inferable from the website

- A `contact_click` cannot prove that WhatsApp, email, or a call was delivered, answered, or qualified.
- The website has no server-side CRM or inbox acknowledgement, so a real received lead must be recorded separately outside GA4.
- GA4 reporting can be delayed; this review did not generate a real visitor contact or transmit personal data.
