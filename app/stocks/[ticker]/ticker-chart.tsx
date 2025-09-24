"use client";
import { useEffect, useRef } from "react";
import { createChart, ColorType, ISeriesApi } from "lightweight-charts";

export default function TickerChart({ ticker }: { ticker: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const chart = createChart(ref.current, {
      width: ref.current.clientWidth,
      height: 320,
      layout: { background: { type: ColorType.Solid, color: "#0D1117" }, textColor: "#C9D1D9" },
      grid: { horzLines: { color: "#20232a" }, vertLines: { color: "#20232a" } }
    });
    const series: ISeriesApi<"Area"> = chart.addAreaSeries({ lineWidth: 2 });
    fetch(`/api/quote/${ticker}?series=1d`)
      .then(r => r.json())
      .then(d => series.setData(d.series));
    const onResize = () => chart.applyOptions({ width: ref.current!.clientWidth });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ticker]);
  return <div ref={ref} className="w-full rounded-2xl bg-panel p-2" />;
}
