# debiderryberry.com

Static clone of https://debiderryberry.com (cloned 2026-11-26), taken off the
voiceactor.com site builder so it can be hosted on any static host.

## Layout

- `index.html` and `<page>/index.html` for `/appearances`, `/autographs`, `/biography`,
  `/characters`, `/contact`, `/kids-music`, `/music`, `/voiceover-help`, so the
  existing links work on any static host.
- `assets/builder-pro/`, `assets/builder-frontend/` – CSS and JS formerly on
  `debiderryberry.voiceactor.com`.
- `assets/media/<id>/` – images and MP3 demos formerly on `voiceactor.net`.

## Still external (intentionally)

- Videos: YouTube embeds.
- Libraries from cdnjs: Font Awesome, Slick carousel.
- Contact form: Formspree. Booking: Calendly.

## Known issues carried over from the original

- `assets/builder-pro/iframe/stellarnav.css` references `menu-arrow.png`, which
  returns 404 on the original host too.

## Preview locally

    python3 -m http.server 8000   # then open http://localhost:8000
