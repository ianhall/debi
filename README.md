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
| `images/` | All pictures. `images/icons.svg` holds the social media icons. |
| `audio/` | The 23 character voice clips. |

Fonts and headings: the site uses two fonts, Anton for headings and Open Sans for
everything else. Each page has one title, `<h1 class="title">`, and section
headings use `<h2 class="heading">` (add `center` when the heading spans the page).

The header, menu and footer are repeated in every page. If you change one (for
example, add a menu item), make the same change in all of them.

All links between pages and to images, CSS and JS are relative (`css/site.css`,
`../images/logo.png`), so the site works at the domain root, under a sub-folder
such as `https://<username>.github.io/debi/`, and when opened straight from disk.
Keep new links relative too.

### After editing the CSS or JS

Pages link to the stylesheet and script with a version fingerprint, for example
`css/site.css?v=f578c648`. Browsers keep saved copies of these files, so the
fingerprint is what makes them fetch the new version straight away. After
changing `css/site.css` or `js/player.js`, run this from the repository root:

    bin/stamp-assets

It updates the fingerprint on every page. Running it when nothing changed is
harmless.

Outside services still used: YouTube (videos), Google Fonts, Formspree (contact
form) and Calendly (coaching bookings).

## Preview locally

    python3 -m http.server 8000   # then open http://localhost:8000

(Python's server can't seek within audio clips; GitHub Pages can.)

## Hosting: GitHub Pages

GitHub Pages is free for public repositories (private ones need a paid plan).

### Preview (before touching DNS)

1. In the repository on GitHub: **Settings → Pages → Build and deployment**:
   Source **Deploy from a branch**, pick the branch to preview, folder **/ (root)**, **Save**.
2. After a minute or two the page shows the address, `https://<username>.github.io/debi/`.
   The **Actions** tab shows each publish while it runs.

The old site at debiderryberry.com is untouched while you preview.

### Go live on debiderryberry.com

1. **Settings → Pages**: set the branch to **main** (once the work is merged).
2. Under **Custom domain**, enter `debiderryberry.com` and **Save**.
   (GitHub adds a `CNAME` file to `main` for you.)
3. At the domain registrar, point the domain at GitHub Pages:
   - `A` records for `debiderryberry.com`: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`
   - `CNAME` record for `www`: `<username>.github.io`
4. Back in **Settings → Pages**, wait for the DNS check to pass, then tick
   **Enforce HTTPS**.

Every push to `main` then publishes the site automatically.
