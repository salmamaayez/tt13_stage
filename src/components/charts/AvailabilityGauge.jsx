import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import Panel from "../ui/Panel.jsx";
import { C } from "../../theme.js";

export default function AvailabilityGauge({ value = 99.8 }) {
  return (
    <Panel title="Disponibilité globale" delay={0.6}>
      <div style={{ height: 240, position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="72%" outerRadius="100%" data={[{ v: value, fill: C.green }]}
            startAngle={90} endAngle={90 - 360 * (value / 100)}>
            <RadialBar background={{ fill: C.panel2 }} dataKey="v" cornerRadius={12} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 grid place-items-center pointer-events-none">
          <div className="text-center">
            <div className="font-mono text-[34px] font-bold text-ttext">
              {value}<span className="text-base text-mute">%</span>
            </div>
            <div className="text-ttgreen text-[12.5px] mt-0.5">● Nominal</div>
          </div>
        </div>
      </div>
    </Panel>
  );
}
