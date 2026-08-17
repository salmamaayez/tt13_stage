import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Brain } from "lucide-react";
import Panel from "../ui/Panel.jsx";
import ChartTooltip from "../ui/ChartTooltip.jsx";
import ia from "../../data/ia_data.json";
import { C } from "../../theme.js";

export default function ForecastChart() {
  const f = ia.forecast;
  return (
    <Panel title={`Prévision IA (Prophet) — ${f.kpi} · ${f.entity || ""}`} delay={0.92}
      right={
        <div className="flex items-center gap-2">
          <Brain size={15} color={C.violet} />
          <span className="text-mute text-xs">réel · prévu · intervalle 95%</span>
        </div>
      }>
      <div style={{ height: 230 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={f.points} margin={{ top: 6, right: 12, left: -18, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.line} vertical={false} />
            <XAxis dataKey="t" tick={{ fill: C.mute, fontSize: 10 }} axisLine={false} tickLine={false} interval={4} />
            <YAxis domain={["auto", "auto"]} tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} />
            {/* Intervalle de confiance (bornes basse/haute) */}
            <Line type="monotone" dataKey="haut" name="Borne haute" stroke={C.violet} strokeWidth={1}
                  strokeDasharray="2 4" strokeOpacity={0.4} dot={false} connectNulls />
            <Line type="monotone" dataKey="bas" name="Borne basse" stroke={C.violet} strokeWidth={1}
                  strokeDasharray="2 4" strokeOpacity={0.4} dot={false} connectNulls />
            {/* Réel + Prévu */}
            <Line type="monotone" dataKey="reel" name="Réel" stroke={C.teal} strokeWidth={2.4} dot={false} connectNulls />
            <Line type="monotone" dataKey="prevu" name="Prévu (IA)" stroke={C.violet} strokeWidth={2.4}
                  strokeDasharray="6 5" dot={false} connectNulls />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}