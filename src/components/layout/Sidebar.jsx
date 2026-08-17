import { LayoutDashboard, Network, AlertTriangle, Brain, Settings, Signal } from "lucide-react";
import { C } from "../../theme.js";

const NAV = [
  { icon: LayoutDashboard, label: "Vue d'ensemble", active: true },
  { icon: Network, label: "Réseau" },
  { icon: AlertTriangle, label: "Alarmes" },
  { icon: Brain, label: "Prévisions IA" },
  { icon: Settings, label: "Paramètres" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex w-[232px] min-h-screen bg-panel border-r border-line
                      flex-col p-[18px] sticky top-0">
<div
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: 26,
  }}
>
  <img
    src="/tt.png"
    alt="Tunisie Telecom"
    style={{
      width: 170,
      height: "auto",
      objectFit: "contain",
    }}
  />
</div>
      <nav className="flex flex-col gap-1">
        {NAV.map((n, i) => {
          const Icon = n.icon;
          return (
            <div key={i}
              className="flex items-center gap-3 px-3 py-2.5 rounded-[10px] cursor-pointer
                         transition-colors hover:bg-panel2"
              style={{
                color: n.active ? C.text : C.mute,
                background: n.active ? "#182A44" : "transparent",
                borderLeft: n.active ? `2px solid ${C.green}` : "2px solid transparent",
              }}>
              <Icon size={18} color={n.active ? C.green : C.mute} />
              <span className="text-[13.5px]">{n.label}</span>
            </div>
          );
        })}
      </nav>

      <div className="mt-auto bg-panel2 border border-line rounded-xl p-3">
        <div className="flex items-center gap-2">
          <Signal size={15} color={C.green} />
          <span className="text-xs text-mute">Réseau opérationnel</span>
        </div>
        <div className="font-mono text-[22px] font-bold mt-1 text-ttext">
          98.7<span className="text-xs text-mute"> % OK</span>
        </div>
      </div>
    </aside>
  );
}
