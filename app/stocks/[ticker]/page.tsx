import { Suspense } from "react";
import TickerHeader from "./ticker-header";
import TickerChart from "./ticker-chart";
import KeyStats from "./key-stats";
import TickerNews from "./ticker-news";
import ChatDock from "./chat-dock";

export default async function TickerPage({ params }: { params: { ticker: string } }) {
  const ticker = params.ticker.toUpperCase();
  return (
    <div className="mx-auto max-w-7xl p-4 space-y-6">
      <TickerHeader ticker={ticker} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 space-y-4">
          <Suspense fallback={<div className="h-72 animate-pulse rounded-2xl bg-panel" />}>
            <TickerChart ticker={ticker} />
          </Suspense>
          {/* @ts-expect-error Async Server Component */}
          <KeyStats ticker={ticker} />
        </div>
        <div className="space-y-4">
          {/* @ts-expect-error Async Server Component */}
          <TickerNews ticker={ticker} />
          <ChatDock ticker={ticker} />
        </div>
      </div>
    </div>
  );
}
