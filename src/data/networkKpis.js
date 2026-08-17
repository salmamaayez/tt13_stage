// Définition des KPI par technologie (basé sur les KPI Radio de TUNISIE TELECOM
// + accès fixe). dir: "up" = plus haut = mieux ; "down" = plus bas = mieux.
// vol = amplitude du bruit à chaque rafraîchissement (temps réel).
import { Gauge, Activity, Timer, Unplug, Server, Bell,
         PhoneOff, PhoneCall, Wifi, SignalHigh, Waves } from "lucide-react";
import { C } from "../theme.js";

export const TECHS = [
  { id: "tout",  label: "Tout" },
  { id: "5g",    label: "5G" },
  { id: "4g",    label: "4G" },
  { id: "3g",    label: "3G" },
  { id: "2g",    label: "2G" },
  { id: "fibre", label: "Fibre" },
  { id: "adsl",  label: "ADSL" },
];

// helper : (clé, libellé, unité, base, [min,max], décimales, direction, couleur, icône, volatilité)
function k(key, label, unit, base, [lo, hi], dec, dir, color, icon, vol) {
  return { key, label, unit, base, lo, hi, dec, dir, color, icon, vol };
}

export const KPI_SETS = {
  tout: [
    k("dispo", "Disponibilité", "%", 99.85, [99.5, 99.95], 2, "up",   C.green,  Gauge,   0.03),
    k("debit", "Débit moyen ↓", "Mbps", 247, [180, 320],   0, "up",   C.teal,   Activity, 6),
    k("lat",   "Latence", "ms", 36, [20, 60],               0, "down", C.blue,   Timer,    2),
    k("coup",  "Taux de coupure", "%", 1.29, [0.4, 3],      2, "down", C.amber,  Unplug,   0.1),
    k("occ",   "Occupation", "%", 63, [40, 95],             0, "down", C.violet, Server,   3),
    k("alarm", "Alarmes (24h)", "", 53, [30, 80],           0, "down", C.coral,  Bell,     2),
  ],
  "2g": [
    k("cdr",   "Call Drop Rate", "%", 1.4, [0.5, 3],    2, "down", C.coral, PhoneOff, 0.12),
    k("dispo", "Disponibilité", "%", 99.6, [99, 99.9],  2, "up",   C.green, Gauge,    0.04),
    k("cong",  "Congestion", "%", 1.6, [0.5, 4],        2, "down", C.amber, Server,   0.15),
  ],
  "3g": [
    k("cssr_cs", "Call Setup CS (voix)", "%", 99.1, [97, 99.9], 2, "up",   C.green, PhoneCall, 0.1),
    k("cssr_ps", "Call Setup PS (data)", "%", 98.8, [96, 99.9], 2, "up",   C.teal,  Wifi,      0.1),
    k("cdr_cs",  "Call Drop CS", "%", 1.1, [0.3, 2.5],          2, "down", C.coral, PhoneOff,  0.1),
  ],
  "4g": [
    k("drop",  "Drop %", "%", 0.8, [0.2, 2],       2, "down", C.coral, Unplug,     0.08),
    k("sssr",  "SSSR %", "%", 99.0, [97, 99.9],    2, "up",   C.green, SignalHigh, 0.1),
    k("debit", "Débit ↓", "Mbps", 150, [80, 220],  0, "up",   C.teal,  Activity,   5),
    k("lat",   "Latence", "ms", 30, [15, 60],      0, "down", C.blue,  Timer,      2),
  ],
  "5g": [
    k("drop",  "Drop %", "%", 0.5, [0.1, 1.5],     2, "down", C.coral, Unplug,     0.06),
    k("sssr",  "SSSR %", "%", 99.3, [98, 99.9],    2, "up",   C.green, SignalHigh, 0.08),
    k("debit", "Débit ↓", "Mbps", 680, [400, 950], 0, "up",   C.teal,  Activity,   15),
    k("lat",   "Latence", "ms", 12, [6, 25],       0, "down", C.blue,  Timer,      1),
  ],
  fibre: [
    k("dispo",   "Disponibilité", "%", 99.9, [99.6, 99.99],  2, "up",   C.green,  Gauge,    0.02),
    k("debit",   "Débit ↓", "Mbps", 820, [500, 940],         0, "up",   C.teal,   Activity, 12),
    k("optique", "Puissance optique Rx", "dBm", -22, [-27, -16], 1, "up", C.blue, Waves,    0.3),
    k("occ",     "Occupation", "%", 58, [35, 90],            0, "down", C.violet, Server,   3),
  ],
  adsl: [
    k("dispo", "Disponibilité", "%", 99.4, [98.5, 99.9], 2, "up",   C.green, Gauge,      0.05),
    k("debit", "Débit sync ↓", "Mbps", 18, [8, 24],      1, "up",   C.teal,  Activity,   0.5),
    k("snr",   "Marge SNR", "dB", 10.5, [6, 16],         1, "up",   C.blue,  SignalHigh, 0.3),
    k("atten", "Atténuation", "dB", 25, [10, 45],        1, "down", C.amber, Waves,      0.4),
  ],
};