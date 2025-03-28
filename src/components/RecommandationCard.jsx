import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const RecommendationCard = ({ data }) => {
  const [showDetails, setShowDetails] = useState(false);

  // Couleurs de fond aléatoires basées sur votre thème
  const bgColors = [
    "bg-emerald-950", // Fond vert foncé
    "bg-lime-300", // Fond vert clair
    "bg-white", // Fond blanc
    "bg-emerald-800", // Fond vert moyen
    "bg-lime-200", // Fond lime très clair
  ];

  // Couleurs de texte correspondantes
  const textColors = [
    "text-white", // Texte blanc sur fond foncé
    "text-emerald-950", // Texte foncé sur fond clair
    "text-emerald-950", // Texte foncé sur fond blanc
    "text-white", // Texte blanc sur fond moyen
    "text-emerald-950", // Texte foncé sur fond très clair
  ];

  // Sélection aléatoire des couleurs
  const randomIndex = Math.floor(Math.random() * bgColors.length);
  const bgColor = bgColors[randomIndex];
  const textColor = textColors[randomIndex];
  const borderColor =
    bgColor === "bg-white" ? "border-emerald-950" : "border-white";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`rounded-lg shadow-lg overflow-hidden ${bgColor} ${textColor} border ${borderColor} mb-6`}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center mb-2">
              <span className={`text-2xl font-bold mr-3 ${textColor}`}>
                #{data.rank}
              </span>
              <h3 className="text-xl font-bold">{data.name}</h3>
              <span className="ml-3 px-2 py-1 bg-emerald-800 text-white text-xs rounded-full">
                {data.type}
              </span>
            </div>

            <ul className="mt-2 space-y-1">
              {data.reasons.slice(0, 2).map((reason, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bouton pour afficher/masquer les détails */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowDetails(!showDetails)}
            className={`px-4 py-2 rounded-md ${
              showDetails
                ? "bg-emerald-800 text-white"
                : "bg-lime-300 text-emerald-950"
            } font-medium`}
          >
            {showDetails ? "Masquer détails" : "Voir détails"}
          </motion.button>
        </div>

        {/* Section des détails avec animation */}
        <AnimatePresence>
          {showDetails && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-4"
            >
              <div className="pt-4 border-t border-opacity-20 border-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold mb-2">Rendement potentiel</h4>
                    <p>Minimum: {data.yield.min}</p>
                    <p>Maximum: {data.yield.max}</p>

                    <h4 className="font-bold mt-4 mb-2">
                      Ressources nécessaires
                    </h4>
                    <ul className="space-y-1">
                      {data.required_resources.map((resource, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>{resource}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold mb-2">
                      Coûts estimés (par hectare)
                    </h4>
                    <ul className="space-y-1">
                      {Object.entries(data.estimated_costs_per_ha).map(
                        ([key, value]) => (
                          <li key={key} className="flex justify-between">
                            <span className="capitalize">
                              {key.replace("_", " ")}:
                            </span>
                            <span>{value}</span>
                          </li>
                        )
                      )}
                    </ul>

                    <div className="mt-4 p-3 bg-emerald-900 bg-opacity-30 rounded-lg">
                      <h4 className="font-bold mb-1">Potentiel de profit</h4>
                      <p className="text-lg font-bold">
                        {data.profit_potential}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bouton pour créer un plan */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`mt-6 w-full py-3 rounded-lg bg-lime-300 text-emerald-950 font-bold shadow-md`}
                >
                  Créer un plan
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RecommendationCard;
