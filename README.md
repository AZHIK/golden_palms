# Golden Palms Cleaning Services

Multilingual (English / Swahili) marketing site for Golden Palms Cleaning Services, built with Next.js (App Router) and `next-intl`.

## Requirements

- Node.js ≥ 20.9 (see `.nvmrc`)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it redirects to `/en`. Swahili is available at `/sw`.

Page content lives in `app/[locale]/page.tsx` and the section components under `components/`; translated copy lives in `messages/en.json` and `messages/sw.json`.

## Environment variables

The contact/quote-request form sends email via Gmail SMTP (`app/api/contact/route.ts`) using the business's own Gmail account — no third-party form service or paid plan required.

Copy `.env.local.example` to `.env.local` and fill in:

- `GMAIL_USER` — the Gmail address to send from and receive submissions at (`goldenpalms25@gmail.com`).
- `GMAIL_APP_PASSWORD` — a Gmail **App Password** for that account (not the regular login password):
  1. Turn on 2-Step Verification on the Google account, if not already on: https://myaccount.google.com/security
  2. Go to https://myaccount.google.com/apppasswords, create an app password (name it e.g. "Golden Palms Website"), and copy the 16-character code.
  3. Use that code as `GMAIL_APP_PASSWORD`.

## Deploying

This project deploys to [Vercel](https://vercel.com) with zero configuration: import the GitHub repo, add `GMAIL_USER` and `GMAIL_APP_PASSWORD` under Project Settings → Environment Variables, and deploy.
