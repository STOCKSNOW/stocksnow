import { NextResponse } from "next/server";
export async function GET(_: Request, { params }: { params: { ticker:string }}) {
  return NextResponse.json([
    { id:"1", title:`${params.ticker.toUpperCase()} announces new product`, source:"NewsAPI", timeAgo:"5m", url:"#"},
    { id:"2", title:`Analyst raises ${params.ticker.toUpperCase()} target`, source:"StreetInsider", timeAgo:"22m", url:"#"},
    { id:"3", title:`${params.ticker.toUpperCase()} quarterly earnings preview`, source:"MarketWatch", timeAgo:"1h", url:"#"}
  ]);
}
