# Static CMO/CTO Demo

## Open locally

Option 1:

- Double click `index.html`.

Option 2 (recommended):

- From this folder, run:
  - `python3 -m http.server 8080`
- Open:
  - `http://localhost:8080`

## Files

- `index.html`: presentation structure and narrative sections.
- `styles.css`: visual design (corporate clean + red accents).
- `app.js`: metrics, driver lists, and sample email content.
- `assets/`: reserved for exported notebook chart images if you want to embed them.

## Refresh with latest notebook outputs

Update values in `app.js`:

- `DATA.models`
- `DATA.increase`
- `DATA.decrease`
- `DATA.rfTop`
- `DATA.sampleEmail`

## Notes

- This page is intentionally static and no-build.
- It is optimized for an executive walkthrough of about 5-8 minutes.
- The narrative is intentionally framed as a small-data PoC; the next phase is training and validating on larger-scale production data.
