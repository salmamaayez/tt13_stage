import { useEffect, useState } from "react";

const PAST = 12;     // points réels
const FUT = 6;       // points prévus
const TICK = 2000;   // ms

const label = (d) => d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
const occ = (h) => 62 + Math.sin(((h - 6) / 24) * 2 * Math.PI) * 18;   // profil journalier
const noise = () => (Math.random() - 0.5) * 4;

function build() {
  const now = new Date();
  const past = [];
  for (let i = PAST - 1; i >= 0; i--) {
    const d = new Date(now.getTime() - i * TICK);
    const h = d.getHours() + d.getMinutes() / 60;
    past.push({ t: label(d), reel: Math.round(occ(h) + noise()), prevu: null });
  }
  past[past.length - 1].prevu = past[past.length - 1].reel;   // jonction réel → prévu
  const fut = [];
  for (let k = 1; k <= FUT; k++) {
    const d = new Date(now.getTime() + k * TICK);
    const h = d.getHours() + d.getMinutes() / 60;
    fut.push({ t: label(d), reel: null, prevu: Math.round(occ(h) + 3) });   // projection IA (proxy)
  }
  return [...past, ...fut];
}

/** Occupation : réel (défile) + prévision (mise à jour en continu). */
export function useLiveForecast() {
  const [data, setData] = useState(build);
  useEffect(() => {
    const t = setInterval(() => setData(build()), TICK);
    return () => clearInterval(t);
  }, []);
  return data;
}