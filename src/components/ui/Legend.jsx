export default function Legend({ items }) {
  return (
    <div className="flex items-center gap-3">
      {items.map(([label, color], i) => (
        <div key={i} className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full" style={{ background: color }} />
          <span className="text-mute text-[11.5px]">{label}</span>
        </div>
      ))}
    </div>
  );
}
