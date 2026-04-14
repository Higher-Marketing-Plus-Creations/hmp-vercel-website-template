# HMP Website Rebuild

This repo is now a `Next.js App Router` marketing stack designed for SEO-dominant websites on Vercel.

## What is included

- Static-first marketing pages for `services`, `case studies`, `insights`, `contact`, and `portal`
- Route-level metadata, canonicals, JSON-LD, `robots.txt`, and `sitemap.xml`
- Google Places review support with a Sanity testimonial fallback
- Webhook-ready route handlers for contact and portal-access requests
- Embedded Sanity Studio scaffold with local fallback content so the site works before CMS credentials are wired up

## Local development

```bash
npm install
npm run dev
```

Build the app locally:

```bash
npm run build
```

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values you want to activate.

Core values:

- `NEXT_PUBLIC_SITE_URL`
- `CONTACT_WEBHOOK_URL`
- `PORTAL_ACCESS_WEBHOOK_URL`

Sanity values:

- `SANITY_PROJECT_ID`
- `SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `SANITY_PREVIEW_SECRET`

Google reviews:

- `GOOGLE_MAPS_API_KEY`
- `GOOGLE_PLACE_ID`

## Content model

Sanity schema files live in `sanity/schemaTypes/` and currently cover:

- `siteSettings`
- `service`
- `caseStudy`
- `insight`
- `location`
- `testimonial`

If Sanity is not configured, the app serves local fallback content from `lib/content/local-data.ts`.

## Reviews strategy

- Primary source: Google Places reviews
- Fallback source: Sanity testimonials
- If neither is configured, the site renders an honest activation state instead of fake proof

## Utility routes

Portal and utility routes are intentionally marked `noindex` so the public marketing surface stays focused on commercial and editorial intent.
