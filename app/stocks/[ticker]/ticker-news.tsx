async function getNews(ticker: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${base}/api/news/${ticker}`, { cache: "no-store" });
  return res.json();
}
export default async function TickerNews({ ticker }: { ticker: string }) {
  const items = await getNews(ticker);
  return (
    <div className="rounded-2xl bg-panel p-3">
      <div className="mb-2 text-sm text-gray-300">Latest News</div>
      <div className="space-y-3 overflow-auto max-h-[420px] pr-2">
        {items.map((n: any) => (
          <a key={n.id} href={n.url} target="_blank" className="block">
            <div className="text-gray-100 text-sm">{n.title}</div>
            <div className="text-xs text-gray-500">{n.source} • {n.timeAgo}</div>
          </a>
        ))}
      </div>
    </div>
  );
}
