import { useEffect, useRef, useState } from "react";
import { KPI_SETS } from "../data/networkKpis.js";

const HIST = 16;     // points affichés dans la mini-courbe
const TICK = 2000;   // rafraîchissement (ms)

function seed(techId) {
  const set = KPI_SETS[techId] || KPI_SETS.tout;
  return set.map((it) => ({
    ...it,
    value: it.base,
    history: Array.from({ length: HIST }, () => it.base + (Math.random() - 0.5) * it.vol * 2),
  }));
}

/** Renvoie les KPI de la techno choisie, mis à jour en temps réel. */
export function useLiveKpis(techId) {
  const [items, setItems] = useState(() => seed(techId));
  const ref = useRef(items);

  // Réinitialiser à chaque changement de technologie
  useEffect(() => {
    const s = seed(techId);
    ref.current = s;
    setItems(s);
  }, [techId]);

  // Boucle temps réel
  useEffect(() => {
    const timer = setInterval(() => {
      const next = ref.current.map((it) => {
        let v = it.value + (Math.random() - 0.5) * 2 * it.vol; // marche aléatoire
        v += (it.base - v) * 0.05;                              // léger rappel vers la base
        v = Math.min(it.hi, Math.max(it.lo, v));                // bornes réalistes
        return { ...it, value: v, history: [...it.history.slice(-(HIST - 1)), v] };
      });
      ref.current = next;
      setItems(next);
    }, TICK);
    return () => clearInterval(timer);
  }, [techId]);

  return items;
}