import { useLocation } from "react-router";
import ChatBot from "../components/ChatBot";
import GrowthChart from "../components/GrowthChart";
import Header from "../components/Header";
import PlantHealth from "../components/PlantHealth";
import SmartAnalysis from "../components/SmartAnalysis";
import BreadCrumb from "../components/BreadCrumb";

export default function AnalysisPage() {
  const location = useLocation();
  const { result, image } = location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
      <main className="container mx-auto px-4">
        <Header />
        <BreadCrumb />
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          {/* Left Column - Large Image */}
          <div className="md:w-1/2">
            {image && (
              <div className="relative h-auto rounded-2xl overflow-hidden mb-4">
                <img
                  src={URL.createObjectURL(image)}
                  alt="Spathiphyllum"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h1 className="text-4xl font-bold text-white mb-2">
                    {result.type}
                  </h1>
                </div>
              </div>
            )}
            <div className="flex border justify-between">
              <SmartAnalysis /> 
              <ChatBot />
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="md:w-1/2 space-y-6">
            <PlantHealth data={result} />
            <GrowthChart symptoms={result.symptoms} />
          </div>
        </div>
      </main>
    </div>
  );
}
