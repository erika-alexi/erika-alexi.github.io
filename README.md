# Erika Alexi — portfolio

Personal portfolio deployed with GitHub Pages. Plain HTML, CSS, and JavaScript; no build step or package installation is needed.

- `index.html`: profile, skills, projects, credentials, and contact links.
- `styles.css`: responsive layouts, purple/yellow theme, and image viewer.
- `script.js`: theme preference, mobile navigation, and accessible image previews.
- `assets/`: compact WebP thumbnails and high-resolution previews rendered from the supplied originals. The Android preview uses the embedded app screen at its original resolution. The Cisco preview omits the transcript header containing a personal identifier.
- `assets/icons/`: locally hosted tool logos, source credits, and the Devicon license.

## Preview locally

Run `python -m http.server 8765` from this directory and open `http://localhost:8765`.

## Update images

Use a small `*-thumb.webp` image for the thumbnail's `src` and a larger `*-hd.webp` image for the enclosing button's `data-image` in `index.html`. Give it descriptive alt text and a `data-title` for the preview dialog.

The viewer initially fits the complete image on screen. **Actual size** enables scrolling at the image's original resolution; **Fit image** restores the complete view. Escape, Close, and backdrop clicks dismiss it. Download saves the original image.

## Check changes

Check desktop and mobile layouts, both themes, all six image previews, actual-size scrolling, keyboard closing, mobile navigation, and contact/project links. JavaScript syntax can be checked with `node --check script.js`.

Toolkit logos are static and displayed on transparent backgrounds. Decorative star and quantum-orbit graphics are static SVG/CSS. Consolas is used where available, with monospace fallbacks.

The featured internship project and dashboard are sourced from [C8nnect Survey Data Analysis](https://github.com/erika-alexi/C8nnect-Survey-Data-Analysis). The experience summary describes the documented project workflow; it makes no claims about employment dates or business impact.
