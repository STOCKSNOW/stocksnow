"use client";
import { useState } from "react";

export default function ChatDock({ ticker }: { ticker: string }) {
  const [q, setQ] = useState("");
  const [messages, setMessages] = useState<{role:"user"|"assistant", content:string}[]>([]);
  const ask = async () => {
    if (!q.trim()) return;
    const res = await fetch("/api/bot", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({ ticker, question: q })});
    const data = await res.json();
    setMessages(m => [...m, {role:"user", content:q}, {role:"assistant", content:data.answer}]);
    setQ("");
  };
  return (
    <div className="rounded-2xl bg-panel p-3">
      <div className="text-sm text-gray-300 mb-2">Chat about {ticker}</div>
      <div className="space-y-2 max-h-[300px] overflow-auto pr-1">
        {messages.map((m,i)=>(<div key={i} className={m.role==="user"?"text-gray-200":"text-brand text-sm"}>{m.content}</div>))}
      </div>
      <div className="flex gap-2 mt-2">
        <input
          value={q}
          onChange={e=>setQ(e.target.value)}
          placeholder="e.g., show dividend history"
          className="flex-1 rounded bg-[#0D1117] px-2 py-1 text-sm outline-none"
        />
        <button onClick={ask} className="rounded bg-brand px-3 py-1 text-sm">Ask</button>
      </div>
    </div>
  );
}
