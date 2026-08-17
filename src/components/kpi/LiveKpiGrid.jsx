import { useLiveKpis } from "../../hooks/useLiveKpis.js";
import LiveKpiCard from "./LiveKpiCard.jsx";

export default function LiveKpiGrid({ tech }) {
  const items = useLiveKpis(tech);
  return (
    <section className="grid gap-3 mb-3.5"
             style={{ gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
      {items.map((it, i) => <LiveKpiCard key={it.key} it={it} i={i} />)}
    </section>
  );
}