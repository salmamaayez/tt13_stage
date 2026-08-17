import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useCountUp } from "../../hooks/useCountUp.js";
import Sparkline from "../ui/Sparkline.jsx";
import { spark } from "../../data/mockData.js";
import { C } from "../../theme.js";

export default function KpiCard({ k, i }) {
  const shown = useCountUp(k.value, k.dec);
  const Icon = k.icon;
  const TrendIcon = k.trend >= 0 ? ArrowUpRight : ArrowDownRight;
  const trendColor = k.good ? C.green : C.coral;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.14 + i * 0.07 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl p-4 h-full border border-line"
      style={{ background: `linear-gradient(160deg, ${C.panel} 0%, ${C.panel2} 100%)` }}
    >
      <div className="flex items-center justify-between">
        <span className="text-mute text-[12.5px] tracking-wide">{k.label}</span>
        <span className="w-[30px] h-[30px] rounded-[9px] grid place-items-center"
              style={{ background: k.color + "1F", color: k.color }}>
          <Icon size={16} />
        </span>
      </div>

      <div className="flex items-end justify-between mt-2.5">
        <div className="flex items-baseline gap-1">
          <span className="font-mono text-ttext text-[30px] font-bold leading-none tracking-tight">{shown}</span>
          <span className="text-mute text-[13px]">{k.unit}</span>
        </div>
        <Sparkline data={spark(i)} color={k.color} />
      </div>

      <div className="flex items-center gap-1 mt-2">
        <TrendIcon size={14} color={trendColor} />
        <span className="font-mono text-[12.5px]" style={{ color: trendColor }}>
          {k.trend > 0 ? "+" : ""}{k.trend}{k.unit === "%" ? " pts" : ""}
        </span>
        <span className="text-mute text-xs">vs hier</span>
      </div>
    </motion.div>
  );
}
