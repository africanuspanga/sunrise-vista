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

## AI travel assistant (Moonshot / Kimi)

The floating "Ask Vista AI" chat calls `/api/chat`, which streams answers from the Moonshot API using site data
(Kilimanjaro routes, tours, FAQs) as its knowledge. Set these environment variables locally in `.env.local`
and in the Vercel project settings:

```
MOONSHOT_API_KEY=...
MOONSHOT_BASE_URL=https://api.moonshot.ai/v1
MOONSHOT_MODEL=kimi-k2.6
```

If the key is missing or the API is unavailable, the chat offers to continue on WhatsApp instead.

## Builds

- `pnpm build` — full Next.js build (Vercel; includes the chat API).
- `pnpm build:cpanel` — static export to `./out` for cPanel hosting (no chat API; chat falls back to WhatsApp).
