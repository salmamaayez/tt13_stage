import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Sparkline from "../ui/Sparkline.jsx";
import { C } from "../../theme.js";

export default function LiveKpiCard({ it, i }) {
  const Icon = it.icon;
  const trend = it.value - it.history[0];
  const up = trend >= 0;
  const good = it.dir === "up" ? up : !up;
  const tc = good ? C.green : C.coral;
  const TrendIcon = up ? ArrowUpRight : ArrowDownRight;
  const sparkData = it.history.map((v) => ({ v }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: i * 0.05 }}
      className="rounded-2xl p-4 h-full border border-line"
      style={{ background: `linear-gradient(160deg, ${C.panel} 0%, ${C.panel2} 100%)` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-mute text-[12.5px]">{it.label}</span>
        <span className="w-[30px] h-[30px] rounded-[9px] grid place-items-center"
              style={{ background: it.color + "1F", color: it.color }}>
          <Icon size={16} />
        </span>
      </div>

      <div className="flex items-end justify-between mt-2.5">
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-ttext text-[30px] font-bold leading-none tracking-tight">
            {it.value.toFixed(it.dec)}
          </span>
          <span className="text-mute text-[13px]">{it.unit}</span>
        </div>
        <Sparkline data={sparkData} color={it.color} />
      </div>

      <div className="flex items-center gap-1 mt-2">
        <TrendIcon size={14} color={tc} />
        <span className="font-mono text-[12.5px]" style={{ color: tc }}>
          {up ? "+" : ""}{trend.toFixed(it.dec)}
        </span>
        <span className="livedot inline-block w-1.5 h-1.5 rounded-full bg-ttgreen ml-1" />
        <span className="text-mute text-xs ml-1">en direct</span>
      </div>
    </motion.div>
  );
}