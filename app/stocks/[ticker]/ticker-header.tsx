export default function TickerHeader({ ticker }: { ticker: string }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-panel p-4">
      <div>
        <div className="text-xl font-semibold">{ticker}</div>
        <div className="text-xs text-gray-400">NASDAQ • Live (stub)</div>
      </div>
      <div className="text-right">
        <div className="text-2xl">100.42</div>
        <div className="text-sm text-green-400">+0.41% Today</div>
      </div>
    </div>
  );
}
