/* eslint-disable no-unused-vars */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import AILoader from "../components/AILoader";
import BreadCrumb from "../components/BreadCrumb";
import Header from "../components/Header";
import RecommandationCard from "../components/RecommandationCard";
import RecommandationModal from "../components/RecommandationModal";
import UserCard from "../components/UserCard";
import { useAuth } from "../hooks/useAuth";

const Calendrier = () => {
  const [recommendations, setRecommendations] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCard, setSelectedCard] = useState(null);
  const uri = "https://agri-back-fo2l.onrender.com/recommandations/";
  const month = new Date().toLocaleString("fr-FR", { month: "long" });
  const { user } = useAuth();

  useEffect(() => {
    fetch(uri, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        country: user?.pays,
        region: user?.region,
        month: month,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setRecommendations(data);
        setIsLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setIsLoading(false);
      });
  }, [month, user?.pays, user?.region]);

  return (
    <div className="relative min-h-screen bg-zinc-100">
      <div className="relative z-10 min-h-screen">
        <div className="container mx-auto px-4 py-4">
          <Header />
          <BreadCrumb />

          {/* Grille principale */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-6 gap-6 mt-6"
          >
            {/* Colonne de gauche */}
            <div className="lg:col-span-2 space-y-6">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                transition={{ type: "spring" }}
              >
                <UserCard
                  saison={recommendations?.season}
                  month={month.toUpperCase()}
                  compact
                />
              </motion.div>

              {/* Carte Statistiques */}
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-50"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center mb-4">
                  <h2 className="text-lg font-semibold text-emerald-950 flex items-center">
                    <span className="w-2 h-2 bg-lime-300 rounded-full mr-2"></span>
                    Statistiques Clés
                  </h2>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <StatBox
                    label="Saison"
                    value={recommendations?.season || "N/A"}
                    delay={0.4}
                  />
                  {recommendations?.recommendations?.length > 0 && (
                    <>
                      <StatBox
                        label="Recommandations"
                        value={recommendations.recommendations.length}
                        delay={0.5}
                      />
                      <StatBox
                        label="Invest. moyen"
                        value={
                          recommendations.recommendations[0]
                            ?.estimated_cost_per_ha?.total_investment || "N/A"
                        }
                        delay={0.6}
                      />
                    </>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Colonne de droite */}
            <div className="lg:col-span-4">
              <motion.div
                className="flex items-center justify-between mb-6"
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold text-emerald-950">
                  <span className="text-lime-300">//</span> Recommandations pour{" "}
                  {month}
                </h2>
                <motion.div
                  className="px-3 py-1 bg-emerald-50 text-emerald-800 text-sm rounded-full border border-emerald-100"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                >
                  {recommendations?.recommendations?.length || 0} suggestions
                </motion.div>
              </motion.div>

              {/* Grid des recommandations */}
              {isLoading ? (
                <div className="grid place-items-center min-h-[400px]">
                  <AILoader size="lg" />
                </div>
              ) : recommendations?.recommendations?.length > 0 ? (
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                >
                  <AnimatePresence>
                    {recommendations.recommendations.map((rec, index) => (
                      <RecommandationCard
                        key={rec.id || index}
                        data={rec}
                        index={index}
                        onClick={() => setSelectedCard(rec)}
                        compact
                      />
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  className="bg-white rounded-2xl p-8 text-center border border-emerald-50 shadow-lg"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                >
                  <div className="inline-block mb-4">
                    <motion.div
                      animate={{
                        rotate: 360,
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <svg
                        width="64"
                        height="64"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-emerald-100"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                          fill="currentColor"
                        />
                      </svg>
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-semibold text-emerald-950 mb-2">
                    Aucune recommandation
                  </h3>
                  <p className="text-emerald-800">
                    L'IA n'a trouvé aucune suggestion pour vos critères actuels.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      <RecommandationModal
        data={selectedCard}
        onClose={() => setSelectedCard(null)}
      />
    </div>
  );
};

const StatBox = ({ label, value, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    className="bg-white p-3 rounded-lg border border-emerald-50 hover:border-lime-300 transition-colors"
  >
    <p className="text-xs text-emerald-800 mb-1">{label}</p>
    <motion.p
      className="text-lg font-semibold text-emerald-950"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay + 0.1 }}
    >
      {value}
    </motion.p>
  </motion.div>
);

export default Calendrier;
