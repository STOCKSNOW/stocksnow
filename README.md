# STOCKSNOW (Fixed Starter)

This version is pre-fixed for Vercel:
- ESLint pinned to v8 (Next 14 compatible)
- Build ignores ESLint errors
- Placeholder pages for /screener, /watchlist, /learn
- Ticker page + stub APIs + chatbot dock
- Dark-mode + PWA manifest

## Quick Start
```bash
npm install
npm run dev
# open http://localhost:3000/stocks/AAPL
```

## Deploy
1) Upload the **contents** of this folder to a new GitHub repo (top level, not nested).
2) Import the repo in Vercel → Deploy.
3) (Optional) Set `NEXT_PUBLIC_BASE_URL` in Vercel to your live URL, then redeploy.
