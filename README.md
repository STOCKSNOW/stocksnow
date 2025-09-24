# STOCKSNOW (Starter)

A minimal Next.js 14 (App Router) starter for a stock site with:
- `/stocks/[ticker]` dynamic pages
- Live chart (stubbed)
- Key stats (stubbed)
- Per-ticker news list (stubbed)
- A simple chatbot endpoint

## Quick Start

```bash
npm install
npm run dev
# then open http://localhost:3000/stocks/AAPL
```

### Environment Variables

Create `.env.local` (optional for local base URL):

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Later, replace stub APIs with real vendors (IEX/Polygon, FMP, NewsAPI) and wire OpenAI tools in `/app/api/bot/route.ts`.

## Notes
- Dark-mode first styling via Tailwind.
- Chart uses `lightweight-charts`.
- PWA manifest included; add a service worker when ready.
