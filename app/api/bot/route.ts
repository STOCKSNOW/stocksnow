import { NextResponse } from "next/server";

async function getQuote(ticker:string){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/quote/${ticker}`, { cache: "no-store" });
  return res.json();
}
async function getFundamentals(ticker:string){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/fundamentals/${ticker}`, { cache: "no-store" });
  return res.json();
}
async function getNews(ticker:string){
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/news/${ticker}`, { cache: "no-store" });
  return res.json();
}

export async function POST(req: Request) {
  const { ticker, question } = await req.json();
  if (!ticker) return NextResponse.json({ answer: "Please provide a ticker." });

  if (/dividend|yield|ex-?date/i.test(question || "")) {
    const f = await getFundamentals(ticker);
    const d = f.dividend || {};
    return NextResponse.json({ answer:
      `Dividend yield ${d.yield ?? "—"}%, payout ratio ${d.payoutRatio ?? "—"}%. Next ex-date ${d.exDate ?? "TBA"}. Data as of ${f.asOf}.`
    });
  }
  if (/price|quote|today|now/i.test(question || "")) {
    const q = await getQuote(ticker);
    return NextResponse.json({ answer:
      `${ticker.toUpperCase()} is ${q.price} (${q.changePct}% today).`
    });
  }
  const news = await getNews(ticker);
  return NextResponse.json({ answer:
    `Top headlines: ${news.slice(0,3).map((n:any)=>n.title).join(" • ")}`
  });
}
