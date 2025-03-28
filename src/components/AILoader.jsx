// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AILoader = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950">
      <div className="text-center">
        {/* Animation de tiges de croissance */}
        <div className="relative mx-auto mb-8 h-24 w-24">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`absolute left-1/2 h-8 w-1 origin-bottom ${
                i === activeIndex ? "bg-lime-300" : "bg-white/30"
              }`}
              style={{
                left: `${50 + (i - 1) * 20}%`,
              }}
              animate={{
                height: i === activeIndex ? [8, 32, 8] : 8,
                opacity: i === activeIndex ? [1, 0.8, 1] : 0.6,
              }}
              transition={{
                duration: 1.6,
                ease: "easeInOut",
              }}
            >
              {/* Feuille */}
              {i === activeIndex && (
                <motion.div
                  className="absolute -top-1 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-lime-300"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{
                    duration: 0.8,
                    times: [0, 0.5, 1],
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Texte avec effet de pulvérisation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-xl font-medium text-lime-300">AiGro</h2>
          <motion.p
            className="mt-1 text-white/80"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            Initialisation...
          </motion.p>
        </motion.div>

        {/* Points de progression discrets */}
        <div className="mt-6 flex justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === activeIndex ? "bg-lime-300" : "bg-white/30"
              }`}
              animate={{
                scale: i === activeIndex ? [1, 1.3, 1] : 1,
              }}
              transition={{
                duration: 1.5,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AILoader;
