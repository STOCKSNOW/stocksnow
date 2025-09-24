import { NextRequest, NextResponse } from "next/server";

export async function GET(_: NextRequest, { params }: { params: { ticker: string }}) {
  const { ticker } = params;
  const now = Math.floor(Date.now()/1000);
  const series = Array.from({length: 78}).map((_,i)=>({
    time: now - (78-i)*300, value: 100 + Math.sin(i/8)*2 + Math.random()*0.8
  }));
  return NextResponse.json({
    ticker: ticker.toUpperCase(),
    price: Number(series[series.length-1].value.toFixed(2)),
    change: 0.42,
    changePct: 0.41,
    series
  });
}
