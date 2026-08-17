import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Panel from "../ui/Panel.jsx";
import ChartTooltip from "../ui/ChartTooltip.jsx";
import { regions } from "../../data/mockData.js";
import { C } from "../../theme.js";

export default function RegionChart() {
  return (
    <Panel title="Disponibilité par région" delay={0.68}>
      <div style={{ height: 210 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={regions} margin={{ top: 6, right: 6, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={C.line} vertical={false} />
            <XAxis dataKey="name" tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} />
            <YAxis domain={[99, 100]} tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} cursor={{ fill: "#ffffff08" }} />
            <Bar dataKey="dispo" name="Dispo %" radius={[6, 6, 0, 0]}>
              {regions.map((r, i) => (
                <Cell key={i} fill={r.dispo >= 99.85 ? C.green : r.dispo >= 99.5 ? C.teal : C.amber} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}
