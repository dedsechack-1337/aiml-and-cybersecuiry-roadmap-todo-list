# AI / ML Engineering Roadmap 2026

A Vite + React rebuild of the AI/ML + Cybersecurity engineering roadmap to-do list.

## Structure

```
src/
  data/roadmap.js          # all phase/topic data, colors, priority tiers
  hooks/useLocalStorage.js # persists checked items to the browser
  components/
    Hero.jsx
    Legend.jsx
    ProgressCard.jsx
    Controls.jsx           # search + All/Todo/Done tabs + expand/collapse/reset
    PriorityFilters.jsx    # Must-Do / Important / Good to Have / Later chips
    PhaseCard.jsx           # accordion card per phase
    GlanceGrid.jsx
    Footer.jsx
  App.jsx                  # top-level state + layout
  App.css                  # all styling (dark theme, gradient hero, badges)
```

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The static output goes to `dist/`.

## Deploy to GitHub Pages

1. If deploying under `https://<username>.github.io/<repo-name>/`, set the `base` option
   in `vite.config.js`:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/aiml-roadmap-todo-list/',
   });
   ```
2. Build: `npm run build`
3. Push the contents of `dist/` to your `gh-pages` branch (or use a GitHub Action /
   the `gh-pages` npm package to automate this).

## Editing the roadmap content

All phases, topics, colors, and priority tiers live in `src/data/roadmap.js` — edit the
`RAW_ROADMAP` array to add, remove, or re-tag topics. Items marked with a trailing `★`
in their text automatically get a "NEW" tag in the UI.

## Notes

- Progress is stored in the browser's `localStorage` (per browser/device — it won't sync
  across devices).
- Fonts (Poppins, Inter) load from Google Fonts via `index.html`.
