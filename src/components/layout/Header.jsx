import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { C } from "../../theme.js";

function PulseLine() {
  const d = "M0 14 H30 L36 4 L42 24 L48 14 H78 L84 8 L90 20 L96 14 H140";
  return (
    <svg width="150" height="28" viewBox="0 0 150 28" fill="none">
      <path d={d} stroke={C.green} strokeWidth="1.8" strokeLinecap="round"
            strokeDasharray="200" className="ekg" opacity="0.9" />
    </svg>
  );
}

export default function Header() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <header className="flex items-center justify-between flex-wrap gap-3 mb-[18px]">
      <div>
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-ttext m-0">Supervision des réseaux d'accès</h1>
          <span className="hidden sm:block"><PulseLine /></span>
        </div>
        <p className="text-mute text-[13px] mt-0.5">
          Vue d'ensemble en temps réel · données de démonstration
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 bg-panel border border-line rounded-full px-3.5 py-1.5">
          <span className="livedot w-2 h-2 rounded-full bg-ttgreen" />
          <span className="text-[12.5px] text-ttext">En direct</span>
        </div>
        <div className="flex items-center gap-2 font-mono bg-panel border border-line rounded-full
                        px-3.5 py-1.5 text-ttext text-[13px]">
          <Clock size={14} color={C.mute} /> {now.toLocaleTimeString("fr-FR")}
        </div>
      </div>
    </header>
  );
}
