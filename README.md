# Raoatech R&D and Innovation Point website

A static, single-page website (HTML, CSS and a little JavaScript). It needs no build step and no server code.

## Preview locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit http://localhost:8000.

## Deploy
Any static host works. Upload the whole folder as-is.
- **Vercel / Netlify:** drag the folder in, or connect the GitHub repo. No build command; the output directory is the repo root.
- **cPanel / shared hosting:** upload the contents to `public_html`.

## Editing content
- All text lives in `index.html`, one `<section>` per part of the page.
- Images are in `assets/img`. The hero uses `building-1200` and `building-2000` (JPG + WebP).
- Colours are tokens at the top of `assets/css/site.css`:
  - Deep Carbon `#111622`
  - Metallic Amber `#D49A3E`
  - Titanium Silver `#C0C7D1`

## Before launch
- Replace the headshots in `assets/img` with high-resolution photos (square, at least 400×400).
- Add lab photography if desired.
- Confirm the domain in `index.html` (canonical / Open Graph tags), `robots.txt` and `sitemap.xml` if it isn't www.raoatech.com.
