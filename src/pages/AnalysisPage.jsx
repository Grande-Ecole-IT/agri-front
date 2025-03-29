<<<<<<< HEAD
/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useLocation } from "react-router";
import BreadCrumb from "../components/BreadCrumb";
=======
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useLocation } from "react-router";
import AILoader from "../components/AILoader";
>>>>>>> 541255c (Theme white pour calendrier et analysis)
import ChatBot from "../components/ChatBot";
import GrowthChart from "../components/GrowthChart";
import Header from "../components/Header";
import PlantHealth from "../components/PlantHealth";
import SmartAnalysis from "../components/SmartAnalysis";

export default function AnalysisPage() {
  const location = useLocation();
  const { result, image } = location.state || {};

  return (
<<<<<<< HEAD
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
=======
    <div className="relative min-h-screen bg-zinc-100">
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0 bg-[url('../assets/grid-pattern.svg')] bg-[length:40px_40px]"></div>
      </div>

      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-4">
          <Header />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 mt-6"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Image */}
              <motion.div
                className="relative rounded-2xl overflow-hidden shadow-lg border border-emerald-100 bg-white"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                style={{ height: "320px" }}
              >
                {image ? (
                  <>
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Analyse plante"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                      <motion.h1
                        className="text-3xl font-bold text-white"
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {result.type}
                      </motion.h1>
                    </div>
                  </>
                ) : (
                  <div className="w-full h-full bg-emerald-50 flex items-center justify-center">
                    <AILoader size="lg" />
                  </div>
                )}
              </motion.div>

              {/* PlantHealth */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <PlantHealth data={result} />
              </motion.div>
              {/* GrowthChart */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <GrowthChart symptoms={result?.symptoms} />
              </motion.div>
            </div>

            {/* Deuxième ligne - 2 éléments côte-à-côte */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* ChatBot */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <ChatBot />
              </motion.div>

              {/* SmartAnalysis */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <SmartAnalysis />
              </motion.div>
            </div>
>>>>>>> 541255c (Theme white pour calendrier et analysis)
          </motion.div>
        </div>
      </div>
    </div>
  );
}
