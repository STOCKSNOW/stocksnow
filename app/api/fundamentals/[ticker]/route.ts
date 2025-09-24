import { NextResponse } from "next/server";
export async function GET(_: Request, { params }: { params: { ticker:string }}) {
  return NextResponse.json({
    marketCap: 3400000000000,
    marketCapFormatted: "$3.40T",
    peTtm: 28.1,
    evEbitda: 19.4,
    beta: 1.2,
    dividend: { yield: 0.55, payoutRatio: 18.2, exDate: "2025-10-10" },
    margins: { net: 24.1 },
    leverage: { debtToEquity: 1.4 },
    asOf: new Date().toISOString()
  });
}
