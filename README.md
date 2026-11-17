# ESSENTIAL — Website template collection

ESSENTIAL is a bilingual storefront for five responsive website templates. The public site uses plain HTML, CSS and JavaScript and needs no package install or build step.

## Open locally

Open `index.html` at the project root, or open `store/index.html` directly. Each product card opens a preview page with the supplied screenshots for that template.

| Template | Preview | Price |
| --- | --- | ---: |
| Glow House | `store/preview.html?product=skin` | €39 |
| Table No. 01 | `store/preview.html?product=table` | €49 |
| Form Studio | `store/preview.html?product=form` | €39 |
| Motion Club | `store/preview.html?product=motion` | €45 |
| Still House | `store/preview.html?product=still` | €49 |

## Publish with GitHub Pages

The workflow in `.github/workflows/publish.yml` deploys only the storefront pages, styles, scripts, screenshot assets and photo credits. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. A push to `main` then publishes the store at the site root.

The full editable template folders and downloadable ZIPs stay outside the published site. The local source folder `Nueva carpeta/` and ZIP files in `delivery-packages/` are excluded by `.gitignore`. Do not force-add them to the repository or deploy them.

The storefront's own HTML, CSS and JavaScript are public in this repository and can also be viewed in a browser. The paid template source is not included in the public site.

## Set up automatic sales

The **Buy now** actions open the hosted checkout URLs in `store/js/payment-links.js`. Each product must have the matching ZIP in the payment provider's private digital-delivery area, with automatic email delivery enabled. The store does not collect card details or send product files itself. **Ask a question** remains available using the support address in the same file.

## Photo credits

Photo sources and licences for images visible in the supplied screenshots are listed in `store/image-credits.md`.

See `LAUNCH-GUIDE.md` before announcing the store or taking orders.
