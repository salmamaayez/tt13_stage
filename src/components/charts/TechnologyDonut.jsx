import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import Panel from "../ui/Panel.jsx";
import ChartTooltip from "../ui/ChartTooltip.jsx";
import { techno } from "../../data/mockData.js";

export default function TechnologyDonut() {
  return (
    <Panel title="Répartition par technologie" delay={0.76}>
      <div style={{ height: 210 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={techno} dataKey="value" nameKey="name" innerRadius="58%"
                 outerRadius="88%" paddingAngle={3} stroke="none">
              {techno.map((t, i) => <Cell key={i} fill={t.color} />)}
            </Pie>
            <Tooltip content={<ChartTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-2 gap-1.5 mt-1">
        {techno.map((t, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className="w-2 h-2 rounded-full" style={{ background: t.color }} />
            <span className="text-mute">{t.name}</span>
            <span className="font-mono text-ttext ml-auto">{t.value}%</span>
          </div>
        ))}
      </div>
    </Panel>
  );
}
