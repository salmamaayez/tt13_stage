import { useState } from "react";
import Sidebar from "./components/layout/Sidebar.jsx";
import Header from "./components/layout/Header.jsx";
import TechSelector from "./components/layout/TechSelector.jsx";
import LiveKpiGrid from "./components/kpi/LiveKpiGrid.jsx";
import TrafficChart from "./components/charts/TrafficChart.jsx";
import AvailabilityGauge from "./components/charts/AvailabilityGauge.jsx";
import { dispoGlobale } from "./data/mockData.js";
import RegionChart from "./components/charts/RegionChart.jsx";
import TechnologyDonut from "./components/charts/TechnologyDonut.jsx";
import ForecastChart from "./components/charts/ForecastChart.jsx";
import AlertsPanel from "./components/alerts/AlertsPanel.jsx";

export default function App() {
  const [tech, setTech] = useState("tout");

  return (
    <div className="bg-ink min-h-screen text-ttext font-sans">
      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-5 max-w-full">
          <Header />

          {/* Sélecteur de technologie (5G / 4G / 3G / 2G / Fibre / ADSL) */}
          <TechSelector value={tech} onChange={setTech} />

          {/* KPI en temps réel selon la technologie choisie */}
          <LiveKpiGrid tech={tech} />

          {/* Rangée 1 : trafic (large) + jauge disponibilité */}
          <div className="grid gap-3 mb-3.5"
               style={{ gridTemplateColumns: "minmax(0,2fr) minmax(0,1fr)" }}>
            <TrafficChart />
            <AvailabilityGauge value={dispoGlobale} />
          </div>

          {/* Rangée 2 : régions + technologies + alarmes */}
          <div className="grid gap-3 mb-3.5"
               style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            <RegionChart />
            <TechnologyDonut />
            <AlertsPanel />
          </div>

          {/* Rangée 3 : prévision IA */}
          <ForecastChart />

          <footer className="text-mute text-[11.5px] text-center mt-[18px]">
            PFE-25-26-TT-13 · Données temps réel (simulation) · technologie : {tech.toUpperCase()}
          </footer>
        </main>
      </div>
    </div>
  );
}