import { motion } from "framer-motion";

export default function Panel({ title, right, children, delay = 0, className = "" }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={`bg-panel border border-line rounded-2xl p-4 ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-ttext text-sm font-semibold">{title}</h3>
        {right}
      </div>
      {children}
    </motion.section>
  );
}
