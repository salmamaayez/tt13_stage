import Panel from "../ui/Panel.jsx";
import ia from "../../data/ia_data.json";
import { C } from "../../theme.js";

export default function AlertsPanel() {
  const anomalies = ia.anomalies || [];
  return (
    <Panel title="Anomalies détectées (IA)" delay={0.84}
      right={<span className="text-[11px] px-2.5 py-[3px] rounded-full"
                   style={{ background: C.coral + "22", color: C.coral }}>
               {ia.totalCritiques} critiques
             </span>}>
      <div className="scroll flex flex-col gap-2 max-h-[224px] overflow-y-auto pr-1">
        {anomalies.map((a, i) => (
          <div key={i} className="flex items-start gap-3 bg-panel2 border border-line rounded-[10px] px-3 py-2.5">
            <span className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{ background: a.color }} />
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[11.5px] font-semibold" style={{ color: a.color }}>{a.sev}</span>
                <span className="text-mute text-[11px]">· {a.domaine} · {a.time}</span>
              </div>
              <div className="text-ttext text-[13px] mt-0.5">{a.msg}</div>
              <div className="text-mute text-[11.5px]">{a.site}</div>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}