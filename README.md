# BrightChain Website

Professional website for BrightChain — René de Koning's freelance IT Project Management consultancy.

**Stack:** React + Vite + Tailwind CSS + Framer Motion  
**Language:** Dutch

---

## Deploying to GitHub Pages

### One-time setup (only needed once)

1. Push this repository to GitHub (including the `docs/` folder)
2. Go to your repository on GitHub → **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set **Branch** to `main` and **Folder** to `/docs`
5. Click **Save**

Your site will be live at:
```
https://<your-github-username>.github.io/<repository-name>/
```

### Automatic updates

The GitHub Actions workflow (`.github/workflows/deploy.yml`) automatically rebuilds the `docs/` folder and commits it whenever you push to `main`. No manual steps needed after the first setup.

### Manual rebuild (optional)

To rebuild the site locally and update `docs/`:
```bash
PORT=3000 BASE_PATH=./ pnpm --filter @workspace/brightchain run build
rm -rf docs && cp -r artifacts/brightchain/dist/public docs && cp docs/index.html docs/404.html
```

Then commit and push the updated `docs/` folder.

---

## Local development

```bash
pnpm install
pnpm --filter @workspace/brightchain run dev
```

---

## Project structure

```
artifacts/brightchain/   # Website source code
  src/
    components/
      layout/            # Navbar, Footer
      sections/          # Hero, Services, Cases, About, Contact
  public/                # Static assets (logo, images)
docs/                    # Built output — served by GitHub Pages
.github/workflows/
  deploy.yml             # Auto-rebuilds docs/ on every push
```
