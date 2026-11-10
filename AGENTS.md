# Approved website baseline

The owner approved the current site on 2026-11-10. Preserve these decisions when making unrelated fixes. Change them only for a new explicit request from the owner.

- Homepage order: short introduction, four-property catalogue, news and buyer articles, detailed commercial building spotlight, residency/tax information, districts, FAQ, about, footer.
- The commercial building is the first catalogue property. Do not restore the duplicate hero property navigator or the former hero metrics panels.
- Keep the catalogue filters available in their expandable panel.
- Keep the news section accessible through both desktop and mobile navigation. English and Russian article cards link to their respective language versions. The shared article index is explicitly labelled EN / RU in Russian.
- Preserve the approved direct-from-developer wording and 0% buyer commission terms. The user states that all four properties belong to one developer and that the user acts as its advertising agent.
- The office building asking price is EUR 8,700,000 including VAT. Do not apply its VAT treatment to residential properties. Rental income remains a stated scenario, not a guarantee.
- Preserve English/Russian navigation and enquiry forms, and combined search/filter behaviour.

## Verification and recovery

Before publishing, run `npm run lint` and `npm run build`. Inspect the diff for unintended generated content changes. The generators under `scripts/` are authoritative for static pages; update them when changing generated content.

The approved implementation is commit `1a2afd9`; the documented checkpoint is tagged `approved-site-2026-11-10`. The tag is a recovery reference, not automatic protection against later changes. Never reset or force-push shared history to restore it. Prepare a reviewed corrective commit instead.
