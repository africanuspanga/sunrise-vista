# Sunrise Vista Safaris website

Marketing site for **Sunrise Vista Safaris** — tailor-made Tanzania safaris (Serengeti, Ngorongoro, Northern & Southern Circuits, Zanzibar). Live domain: [sunrisevistasafaris.com](https://www.sunrisevistasafaris.com).

Built with Next.js 14 (App Router, static export), Tailwind CSS v4 and lucide icons.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
pnpm build      # static export to ./out
```

## Where to edit content

| What | File |
| --- | --- |
| Phone, WhatsApp, email, address, socials | `lib/site.ts` |
| Tours & prices | `lib/data/tours.ts` |
| Homepage featured tours, destinations, FAQs, partners, reviews | `lib/data/home.ts` |
| Accommodations | `lib/data/accommodations.ts` |
| Brand colours & fonts | `app/globals.css`, `app/layout.tsx` |

### Before launch

- Replace the placeholder phone / WhatsApp / address in `lib/site.ts`.
- Replace the sample reviews in `lib/data/home.ts` with real guest reviews and set `REVIEWS_ARE_SAMPLES = false`.
- Add any confirmed memberships or awards (e.g. TATO, TripAdvisor) to `partners` in `lib/data/home.ts`.

See `DEPLOYMENT.md` for cPanel hosting.
