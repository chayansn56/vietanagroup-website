# VIETANA GROUP — Corporate Launch Website

Minimal, premium, corporate one-page website for **VIETANA GROUP** ([https://vietanagroup.com](https://vietanagroup.com/)).

## Brand Pillars
- **CONSULTING** — Business insight, strategy, and practical solutions designed to help businesses move forward.
- **TECHNOLOGY** — Digital products, technology solutions, and innovative tools built for modern businesses.
- **MARKETING** — Branding, digital marketing, creative communication, and growth-focused solutions.
- **HOSPITALITY** — Hospitality, food, travel, tourism, and experience-driven ventures.

## Project Structure
```
VIETANAGROUP CORPORATE/
├── public/
│   ├── logo.png             # Official VIETANA logo mark
│   ├── favicon.svg          # Crisp vector favicon
│   ├── favicon.png          # 64x64 PNG favicon
│   ├── icon-192.png         # 192x192 Web app icon
│   ├── icon-512.png         # 512x512 High-res icon
│   ├── og-image.png         # OpenGraph social share card
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # XML sitemap
├── styles/
│   ├── main.css             # Base reset, typography, and design tokens
│   └── components.css       # Header, Hero, Cards, Statement, Contact, Footer
├── scripts/
│   └── app.js               # Mobile navigation, smooth scrolling, copy actions
├── index.html               # Main semantic HTML5 document
├── vercel.json              # Vercel deployment headers and routing
└── package.json             # NPM scripts
```

## Local Development
To run locally:
```bash
# Option 1: Using Python
python3 -m http.server 8080

# Option 2: Using Node / npx
npx serve . -l 3000
```
Open `http://localhost:8080` or `http://localhost:3000` in your browser.

## Deployment to Vercel
This repository is 100% Vercel-ready with zero build step required:
1. Connect this repository to Vercel (or run `npx vercel` in the project root).
2. Framework Preset: **Other** / **Static Site**.
3. Root Directory: `./`
4. Click **Deploy**.
