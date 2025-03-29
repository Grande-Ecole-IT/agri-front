// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";

const RecommandationModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, y: 20, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.95, y: 20, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="bg-white rounded-xl shadow-lg max-w-5xl w-full max-h-[90vh] flex flex-col border border-emerald-50 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-6 pb-4 border-b border-emerald-100">
            <div className="flex justify-between items-start">
              <div>
                <motion.h3
                  className="text-2xl font-bold text-emerald-950"
                  initial={{ x: -10 }}
                  animate={{ x: 0 }}
                >
                  {data.name}
                </motion.h3>
                <motion.span
                  className="inline-block mt-2 px-3 py-1 bg-emerald-950 text-white rounded-full text-xs font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {data.type}
                </motion.span>
              </div>
              <motion.button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-emerald-50 text-emerald-800 transition-colors"
                whileHover={{ rotate: 90 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 overflow-y-auto flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div>
                {/* Avantages */}
                <motion.div
                  className="mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <h4 className="font-semibold text-lg text-emerald-950 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-lime-300 rounded-full mr-2"></span>
                    Avantages Clés
                  </h4>
                  <ul className="space-y-3">
                    {data.reasons.map((reason, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                      >
                        <span className="mr-2 text-lime-300 mt-0.5">▸</span>
                        <span className="text-emerald-900">{reason}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Ressources */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-semibold text-lg text-emerald-950 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-lime-300 rounded-full mr-2"></span>
                    Ressources Nécessaires
                  </h4>
                  <ul className="space-y-3">
                    {data.required_resources.map((resource, i) => (
                      <motion.li
                        key={i}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.35 + i * 0.05 }}
                      >
                        <span className="mr-2 text-emerald-800 mt-0.5">•</span>
                        <span className="text-emerald-900">{resource}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Right Column */}
              <div>
                {/* Rendement */}
                <motion.div
                  className="bg-white rounded-lg p-5 mb-6 border border-emerald-100 shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h4 className="font-semibold text-lg text-emerald-950 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-lime-300 rounded-full mr-2"></span>
                    Projection de Rendement
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-sm text-emerald-800">
                        Minimum:
                      </p>
                      <p className="text-emerald-950 font-medium">
                        {data.yields.min}
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-sm text-emerald-800">
                        Maximum:
                      </p>
                      <p className="text-emerald-950 font-medium">
                        {data.yields.max}
                      </p>
                    </div>
                    <div className="pt-2">
                      <div className="h-2 bg-emerald-100 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-lime-300 to-emerald-600"
                          initial={{ width: 0 }}
                          animate={{ width: "75%" }}
                          transition={{ delay: 0.5 }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Coûts */}
                <motion.div
                  className="bg-white rounded-lg p-5 mb-6 border border-emerald-100 shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="font-semibold text-lg text-emerald-950 mb-3 flex items-center">
                    <span className="w-2 h-2 bg-lime-300 rounded-full mr-2"></span>
                    Analyse des Coûts
                  </h4>
                  <ul className="space-y-3">
                    {Object.entries(data.estimated_cost_per_ha).map(
                      ([key, value], i) => (
                        <motion.li
                          key={key}
                          className="flex justify-between text-sm"
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + i * 0.05 }}
                        >
                          <span className="text-emerald-800 capitalize">
                            {key.replace("_", " ")}:
                          </span>
                          <span className="font-medium text-emerald-950">
                            {value}
                          </span>
                        </motion.li>
                      )
                    )}
                  </ul>
                </motion.div>

                {/* Profit */}
                <motion.div
                  className="bg-white rounded-lg p-5 border border-emerald-100 shadow-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h4 className="font-semibold text-lg text-emerald-950 mb-1 flex items-center">
                    <span className="w-2 h-2 bg-lime-300 rounded-full mr-2"></span>
                    Potentiel de Profit
                  </h4>
                  <motion.p
                    className="text-2xl font-bold text-emerald-600"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.6, type: "spring" }}
                  >
                    {data.profit_potential}
                  </motion.p>
                  <motion.div
                    className="mt-3 text-xs text-emerald-800"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    Estimation basée sur les données du marché et votre région
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <motion.div
            className="mt-auto p-4 border-t border-emerald-100 bg-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex justify-end space-x-3">
              <motion.button
                className="px-6 py-2 border border-emerald-800 text-emerald-800 rounded-lg hover:bg-emerald-50 transition-colors text-sm font-medium"
                onClick={onClose}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Fermer
              </motion.button>
              <motion.button
                className="px-6 py-2 bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-colors text-sm font-medium flex items-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Créer un plan de culture</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default RecommandationModal;
