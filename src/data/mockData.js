// Données réelles agrégées depuis le générateur (dashboard_data.json),
// ré-habillées avec les icônes et couleurs de l'interface.
import { Gauge, Activity, Timer, Unplug, Server, Bell } from "lucide-react";
import { C } from "../theme.js";
import raw from "./dashboard_data.json";

const META = {
  dispo: { label: "Disponibilité", unit: "%", dec: 2, upGood: true,  color: C.green,  icon: Gauge },
  debit: { label: "Débit moyen ↓", unit: "Mbps", dec: 0, upGood: true,  color: C.teal,   icon: Activity },
  lat:   { label: "Latence", unit: "ms", dec: 0, upGood: false, color: C.blue,   icon: Timer },
  coup:  { label: "Taux de coupure", unit: "%", dec: 2, upGood: false, color: C.amber,  icon: Unplug },
  occ:   { label: "Occupation", unit: "%", dec: 0, upGood: false, color: C.violet, icon: Server },
  alarm: { label: "Alarmes (24h)", unit: "", dec: 0, upGood: false, color: C.coral,  icon: Bell },
};
const ORDER = ["dispo", "debit", "lat", "coup", "occ", "alarm"];

export const kpis = ORDER.map((key) => ({
  key,
  ...META[key],
  value: raw.kpis[key].value,
  trend: raw.kpis[key].trend,
  good: (raw.kpis[key].trend >= 0) === META[key].upGood,
}));

export const spark = (i) => raw.spark[ORDER[i]].map((v) => ({ v }));

export const traffic = raw.traffic;       // { h, fibre, mobile, xdsl }
export const regions = raw.regions;       // { name, dispo }
export const techno = raw.techno;         // { name, value, color }
export const forecast = raw.forecast;     // { t, reel, prevu }
export const alerts = raw.alerts;         // { sev, color, site, msg, time }
export const dispoGlobale = raw.dispoGlobale;
