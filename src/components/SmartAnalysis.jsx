// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { FiPause, FiPlay, FiVolume2 } from "react-icons/fi";

export default function SmartAnalysis() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div
      className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white rounded-xl p-6 shadow-lg"
      whileHover={{ scale: 1.01 }}
    >
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Recommended Treatments</h2>
          <p className="text-sm text-emerald-100">Audio guide for plant care</p>
        </div>
        <motion.button
          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? <FiPause /> : <FiPlay />}
        </motion.button>
      </div>

      <div className="flex items-center space-x-4">
        <FiVolume2 className="text-emerald-200" />

        <div className="flex-1 h-auto">
          <div className="w-full h-full bg-white/20 rounded-lg overflow-hidden">
            <div className="h-full flex items-center space-x-1 px-2">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="flex-1 h-6 bg-white rounded"
                  initial={{ opacity: 0.2, scaleY: 0.5 }}
                  animate={{
                    opacity: isPlaying ? [0.3, 0.8, 0.3] : 0.3,
                    scaleY: isPlaying ? [0.5, 1.2, 0.5] : 0.5,
                  }}
                  transition={{
                    repeat: isPlaying ? Infinity : 0,
                    duration: 1.5,
                    delay: i * 0.05,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <span className="text-sm text-emerald-200">02:45</span>
      </div>
    </motion.div>
  );
}
