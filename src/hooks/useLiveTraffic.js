import { useEffect, useRef, useState } from "react";

const N = 24;        // points affichés
const TICK = 2000;   // ms

function label(d) {
  return d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

// Un point de trafic réaliste (courbe journalière + bruit)
function point(date) {
  const hour = date.getHours() + date.getMinutes() / 60;
  const day = Math.sin(((hour - 6) / 24) * 2 * Math.PI) * 0.5 + 0.5;
  const r = () => (Math.random() - 0.5);
  return {
    h: label(date),
    fibre: Math.round(300 + day * 500 + r() * 40),
    mobile: Math.round(120 + day * 180 + r() * 25),
    xdsl: Math.round(15 + day * 20 + r() * 6),
  };
}

/** Série de trafic qui défile en temps réel. */
export function useLiveTraffic() {
  const [data, setData] = useState(() => {
    const now = Date.now();
    return Array.from({ length: N }, (_, i) => point(new Date(now - (N - 1 - i) * TICK)));
  });
  const ref = useRef(data);
  ref.current = data;

  useEffect(() => {
    const t = setInterval(() => {
      const next = [...ref.current.slice(1), point(new Date())];
      setData(next);
    }, TICK);
    return () => clearInterval(t);
  }, []);

  return data;
}