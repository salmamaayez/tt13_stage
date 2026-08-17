import { C } from "../../theme.js";

export default function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-ink border border-line rounded-lg px-3 py-2">
      <div className="text-mute text-[11px] mb-1">{label}</div>
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2 text-xs">
          <span className="w-2 h-2 rounded-full" style={{ background: p.color || p.fill }} />
          <span className="text-ttext font-mono">{p.value ?? "—"}</span>
          <span className="text-mute">{p.name}</span>
        </div>
      ))}
    </div>
  );
}
