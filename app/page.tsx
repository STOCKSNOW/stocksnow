import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl p-6 space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">STOCKSNOW</h1>
        <nav className="text-sm space-x-4">
          <Link href="/screener">Screener</Link>
          <Link href="/watchlist">Watchlist</Link>
          <Link href="/learn">Learn</Link>
        </nav>
      </header>
      <section className="rounded-2xl bg-panel p-6">
        <h2 className="text-lg mb-2">Try a ticker</h2>
        <div className="space-x-3">
          <Link className="underline" href="/stocks/AAPL">AAPL</Link>
          <Link className="underline" href="/stocks/NVDA">NVDA</Link>
          <Link className="underline" href="/stocks/TSLA">TSLA</Link>
        </div>
        <p className="mt-4 text-sm text-gray-400">Tip: replace the symbol in the URL, e.g., /stocks/MSFT</p>
      </section>
    </main>
  );
}
