import { TECHS } from "../../data/networkKpis.js";
import { C } from "../../theme.js";

export default function TechSelector({ value, onChange }) {
  return (
    <div className="flex items-center gap-2 flex-wrap mb-3.5">
      <span className="text-mute text-[12.5px] mr-1">Technologie :</span>
      {TECHS.map((t) => {
        const active = value === t.id;
        return (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className="rounded-full font-semibold transition-all"
            style={{
              padding: "6px 14px", fontSize: 13, cursor: "pointer",
              color: active ? C.ink : C.mute,
              background: active ? C.green : C.panel,
              border: `1px solid ${active ? C.green : C.line}`,
            }}
          >
            {t.label}
          </button>
        );
      })}
    </div>
  );
}