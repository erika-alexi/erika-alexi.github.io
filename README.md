# Erika Alexi — portfolio

Personal portfolio deployed with GitHub Pages. Plain HTML, CSS, and JavaScript; no build step or package installation is needed.

- `index.html`: profile, skills, projects, credentials, and contact links.
- `styles.css`: responsive layouts, purple/yellow theme, and image viewer.
- `script.js`: theme preference, mobile navigation, and accessible image previews.
- `assets/`: the six original portfolio screenshots and certificates, preserved at their original resolution.

## Preview locally

Run `python -m http.server 8765` from this directory and open `http://localhost:8765`.

## Update images

Replace an image in `assets/`, or update both the thumbnail's `src` and its enclosing button's `data-image` in `index.html`. Give it descriptive alt text and a `data-title` for the preview dialog.

The viewer initially fits the complete image on screen. **Actual size** enables scrolling at the image's original resolution; **Fit image** restores the complete view. Escape, Close, and backdrop clicks dismiss it. Download saves the original image.

## Check changes

Check desktop and mobile layouts, both themes, all six image previews, actual-size scrolling, keyboard closing, mobile navigation, and contact/project links. JavaScript syntax can be checked with `node --check script.js`.
