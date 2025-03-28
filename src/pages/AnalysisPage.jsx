import Header from "../components/Header";
import PlantHealth from "../components/PlantHealth";
import GrowthChart from "../components/GrowthChart";
import SmartAnalysis from "../components/SmartAnalysis";
import RecentUpdates from "../components/RecentUpdates";
import ChatBot from "../components/ChatBot";
import { useLocation } from "react-router";

export default function AnalysisPage() {
  const location = useLocation();
  const data = location.state; // Récupère les données envoyées

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - Large Image */}
          <div className="md:w-1/2">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <img
                src="tomate.webp"
                alt="Spathiphyllum"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h1 className="text-4xl font-bold text-white mb-2">
                  {data.type}
                </h1>
                <p className="text-gray-200">Peace Lily</p>
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="md:w-1/2 space-y-6">
            <div className="grid grid-cols-[1fr_0.5fr] space-x-4 bg-white p-6 rounded-xl">
              <PlantHealth data={data} />
              <GrowthChart />
            </div>
            <RecentUpdates />
          </div>
        </div>
      </main>
    </div>
  );
}
