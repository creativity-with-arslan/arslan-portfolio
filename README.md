# Arslan Ali — Portfolio (Angular + Tailwind)

## What's inside

A standalone-components Angular 18 project. Each section of the portfolio is
its own component under `src/app/components/`, so you can edit content
without touching layout code:

- `navbar/` — sticky nav + mobile menu
- `hero/` — hero section with the terminal visual
- `about/` — bio + quick stats (edit `about.component.ts` to change the text/stats)
- `skills/` — skill category cards (edit `skills.component.ts` to add/remove skills)
- `projects/` — project cards (edit `projects.component.ts` — this is where you add
  real GitHub repo links and live demo URLs as you get them)
- `experience/` — timeline (edit `experience.component.ts`)
- `education/` — degree + subjects (edit `education.component.ts`)
- `learning/` — "currently learning" pills (edit `learning.component.ts`)
- `github-section/` — GitHub call-to-action tiles
- `contact/` — reactive form wired to Formspree (edit `contact.component.ts` if you
  ever change your email, WhatsApp number, or Formspree endpoint)
- `footer/`

Styling is Tailwind CSS, configured in `tailwind.config.js` with the same dark
color palette and fonts as the original design.

## Running it locally

You'll need Node.js (18+) and npm installed. Then, inside this folder:

```bash
npm install
npm start
```

This opens the dev server at `http://localhost:4200`. Any file you save will
hot-reload in the browser.

## Adding your profile photo

1. Put your image at `src/assets/profile.jpg` (create the `assets` folder if it
   doesn't exist).
2. Open `src/app/components/about/about.component.html` and replace the "AA"
   placeholder `<div>` with the commented-out `<img>` tag right above it.

## Building for production

```bash
npm run build
```

This outputs static files to `dist/arslan-portfolio/browser` — this is the
folder Vercel will deploy.

## Contact form

The contact form posts directly to Formspree
(`https://formspree.io/f/mvkobojz`) from the browser — no backend required.
Submissions arrive at `codingala@gmail.com`. If you ever move to a Laravel
backend instead, just change the `FORMSPREE_ENDPOINT`/HTTP call in
`contact.component.ts` to point at your own API.
