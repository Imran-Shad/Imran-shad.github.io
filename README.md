# Md. Imran Hossain Shad — Portfolio

Personal academic portfolio of Md. Imran Hossain Shad, Graduate Research Assistant in Nanomaterials and Ceramic Engineering at Bangladesh University of Engineering and Technology (BUET).

Live site: https://imran-shad.github.io

## Structure

```
.
├── index.html              # Single-page site
├── assets/
│   ├── css/style.css       # All styles
│   ├── js/main.js          # Footer year and back-to-top button
│   ├── images/             # Portrait, lab photos, favicon
│   └── docs/               # Downloadable CV (PDF)
├── .nojekyll               # Serve files as-is on GitHub Pages
└── README.md
```

Images the page expects in `assets/images/`:

| File                | Used for                            |
| ------------------- | ----------------------------------- |
| `imran.jpg`         | Portrait in the header, link previews |
| `lab-fumehood.jpg`  | Header background, Research section |
| `lab-autoclave.jpg` | Research section                    |
| `favicon.svg`       | Browser tab icon                    |

## Updating

- **Content:** edit `index.html`.
- **Styles:** edit `assets/css/style.css`. Colors and widths are variables at the top of the file.
- **Images:** add to `assets/images/` using lowercase, hyphenated names (e.g. `award-icfs-2026.jpg`).
- **CV:** replace `assets/docs/md-imran-hossain-shad-cv.pdf`, keeping the same file name.

## Local preview

No build step is needed. Open `index.html` in a browser, or serve the folder:

```
npx http-server .
```
