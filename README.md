# Yousef Akmal - QA Portfolio

Premium, responsive portfolio built with React, TypeScript, Vite, Tailwind CSS, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Production verification:

```bash
npm run build
npm run test
```

## Content and assets

- Edit all personal content, experience, skills, projects, and credentials in `src/data/portfolio.ts`.
- Replace the portrait placeholder in `src/App.tsx` with an optimized WebP/AVIF image in `public/assets/`; keep meaningful alt text.
- The real CV is stored at `public/assets/Yousef_Akmal_CV.pdf` and is used by every CV download action.
- Add project screenshots under `public/assets/projects/` and certificate images under `public/assets/certificates/`, then reference them from the centralized data file.
- Repository/demo links are intentionally omitted until verified URLs are supplied.

## Deploy

The project includes `netlify.toml` and `vercel.json`. Import the repository into either service; both will run `npm run build` and publish `dist`.

### GitHub Pages

For the clean account URL `https://yousefakmal.github.io`, create a public repository named `yousefakmal.github.io` and push this project to its `main` branch. The included `.github/workflows/deploy-pages.yml` workflow builds and publishes the site automatically. In the repository settings, Pages must use **GitHub Actions** as its source.

## QR workflow

Only generate the printed QR after the final public production domain is confirmed. Example:

```bash
npx qrcode -t svg -q H -m 4 -o outputs/yousef-portfolio-qr.svg https://your-final-domain.example
npx qrcode -t png -q H -m 4 -w 1600 -o outputs/yousef-portfolio-qr.png https://your-final-domain.example
```

Scan both exported files from a physical phone before printing. Never encode localhost or a temporary preview URL.
