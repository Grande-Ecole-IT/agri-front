/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useLocation } from "react-router";
import BreadCrumb from "../components/BreadCrumb";
import ChatBot from "../components/ChatBot";
import GrowthChart from "../components/GrowthChart";
import Header from "../components/Header";
import PlantHealth from "../components/PlantHealth";
import SmartAnalysis from "../components/SmartAnalysis";

export default function AnalysisPage() {
  const location = useLocation();
  const { result, image } = location.state || {};

  return (
    <div className="min-h-screen bg-zinc-50">
      <main className="container mx-auto px-4">
        <Header />
        <BreadCrumb />

        {/* Top Section - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {/* Image Column */}
          <motion.div
            className="relative rounded-2xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {image && (
              <>
                <img
                  src={URL.createObjectURL(image)}
                  alt="Plant Analysis"
                  className="w-full h-full max-h-[350px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h1 className="text-3xl font-bold text-white">
                    {result.type}
                  </h1>
                </div>
              </>
            )}
          </motion.div>
          {/* Plant Health Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <PlantHealth data={result} />
          </motion.div>

          {/* Growth Chart Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <GrowthChart symptoms={result?.symptoms} />
          </motion.div>
        </div>

        {/* Bottom Section - 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {/* Chat Bot Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <ChatBot />
          </motion.div>

          {/* Smart Analysis Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
          >
            <SmartAnalysis />
          </motion.div>
        </div>
      </main>
    </div>
  );
}
