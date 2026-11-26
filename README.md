# debiderryberry.com

Source for https://debiderryberry.com — a plain static site (HTML, one CSS file,
one small JS file). No build step.

## Layout

| Path | What it is |
|---|---|
| `index.html`, `<page>/index.html` | The 9 pages. Each lives in its own folder so `/characters/` etc. work on any static host. |
| `404.html` | "Page not found" page. |
| `css/site.css` | The only stylesheet. Colours and fonts are defined at the top in `:root`. |
| `js/player.js` | The audio player on the Characters page (play/pause, progress bar). Without JavaScript the browser's own player is shown. |
| `images/` | All pictures. `images/icons.svg` holds the social and download icons. |
| `audio/` | The 23 character voice clips. |
| `CNAME` | Tells GitHub Pages the site's domain. |

The header, menu and footer are repeated in every page. If you change one (for
example, add a menu item), make the same change in all of them.

Outside services still used: YouTube (videos), Google Fonts, Formspree (contact
form) and Calendly (coaching bookings).

## Preview locally

    python3 -m http.server 8000   # then open http://localhost:8000

(Python's server can't seek within audio clips; GitHub Pages can.)

## Hosting: GitHub Pages

1. In the repository on GitHub: **Settings → Pages → Build and deployment**:
   Source **Deploy from a branch**, branch **main**, folder **/ (root)**.
2. At the domain registrar, point the domain at GitHub Pages:
   - `A` records for `debiderryberry.com`: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www`: `<github-username>.github.io`
3. Back in **Settings → Pages**, wait for the DNS check to pass, then tick
   **Enforce HTTPS**.

Every push to `main` then publishes the site automatically.
