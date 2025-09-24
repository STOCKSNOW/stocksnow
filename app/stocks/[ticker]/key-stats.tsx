async function getFundamentals(ticker: string) {
  const base = process.env.NEXT_PUBLIC_BASE_URL || "";
  const res = await fetch(`${base}/api/fundamentals/${ticker}`, { cache: "no-store" });
  return res.json();
}

export default async function KeyStats({ ticker }: { ticker: string }) {
  const f = await getFundamentals(ticker);
  const card = (label: string, value: string | number | null) => (
    <div className="rounded-2xl bg-panel p-3">
      <div className="text-xs text-gray-400">{label}</div>
      <div className="text-lg text-gray-100">{value ?? "—"}</div>
    </div>
  );
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
      {card("Market Cap", f.marketCapFormatted)}
      {card("P/E (TTM)", f.peTtm)}
      {card("EV/EBITDA", f.evEbitda)}
      {card("Dividend Yield", f.dividend?.yield ? `${f.dividend.yield}%` : "—")}
      {card("Payout Ratio", f.dividend?.payoutRatio ? `${f.dividend.payoutRatio}%` : "—")}
      {card("Net Margin", f.margins?.net ? `${f.margins.net}%` : "—")}
      {card("Debt/Equity", f.leverage?.debtToEquity ?? "—")}
      {card("Beta", f.beta ?? "—")}
    </div>
  );
}
