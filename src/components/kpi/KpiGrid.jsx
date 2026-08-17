import KpiCard from "./KpiCard.jsx";
import { kpis } from "../../data/mockData.js";

export default function KpiGrid() {
  return (
    <section className="grid gap-3 mb-3.5"
             style={{ gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))" }}>
      {kpis.map((k, i) => <KpiCard key={k.key} k={k} i={i} />)}
    </section>
  );
}
