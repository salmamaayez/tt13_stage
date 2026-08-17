import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import Panel from "../ui/Panel.jsx";
import Legend from "../ui/Legend.jsx";
import ChartTooltip from "../ui/ChartTooltip.jsx";
import { useLiveTraffic } from "../../hooks/useLiveTraffic.js";
import { C } from "../../theme.js";

export default function TrafficChart() {
  const data = useLiveTraffic();
  return (
    <Panel title="Débit par type d'accès — en direct" delay={0.52}
      right={
        <div className="flex items-center gap-3">
          <span className="livedot inline-block w-2 h-2 rounded-full bg-ttgreen" />
          <Legend items={[["Fibre", C.teal], ["Mobile", C.blue], ["xDSL", C.violet]]} />
        </div>
      }>
      <div style={{ height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 6, right: 6, left: -18, bottom: 0 }}>
            <defs>
              {[["td", C.teal], ["tb", C.blue], ["tv", C.violet]].map(([id, col]) => (
                <linearGradient key={id} id={id} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={col} stopOpacity="0.45" />
                  <stop offset="100%" stopColor={col} stopOpacity="0" />
                </linearGradient>
              ))}
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={C.line} vertical={false} />
            <XAxis dataKey="h" tick={{ fill: C.mute, fontSize: 10 }} interval={5} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: C.mute, fontSize: 11 }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} />
            <Area isAnimationActive={false} type="monotone" dataKey="fibre" name="Fibre" stroke={C.teal} fill="url(#td)" strokeWidth={2} />
            <Area isAnimationActive={false} type="monotone" dataKey="mobile" name="Mobile" stroke={C.blue} fill="url(#tb)" strokeWidth={2} />
            <Area isAnimationActive={false} type="monotone" dataKey="xdsl" name="xDSL" stroke={C.violet} fill="url(#tv)" strokeWidth={2} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}