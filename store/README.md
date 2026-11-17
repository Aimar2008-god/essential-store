# ESSENTIAL storefront

This folder contains the public, bilingual storefront. GitHub Pages publishes its contents as the website root through `.github/workflows/publish.yml`; the complete template source and sale ZIPs are excluded.

## Preview locally

Open `index.html` in a browser or serve this folder with a local static server. No build step or package install is required.

## Files

- `index.html` and `preview.html` provide the collection and individual product preview pages.
- `assets/previews/` contains the creator-supplied screenshots shown on the collection and product pages.
- `js/products.js` holds product copy, prices, screenshot names and accessible descriptions in English and Spanish.
- `js/payment-links.js` holds the public checkout URLs and support email.
- `js/main.js` controls the filters, language selector and product cards.
- `js/site-previews.js` renders screenshot galleries and purchase/contact actions.
- `image-credits.md` lists the photo sources and licences visible in the screenshots.

## Automatic checkout

Each buy button opens its hosted checkout URL. The matching ZIP must stay in the payment provider's private delivery area, where automatic post-purchase email delivery is enabled. The storefront does not handle payments or deliver files. **Ask a question** stays as a separate email link.

The sample prices are €39 for Glow House, €49 for Table No. 01, €39 for Form Studio, €45 for Motion Club and €49 for Still House.

See `../LAUNCH-GUIDE.md` for release steps and private file delivery.
