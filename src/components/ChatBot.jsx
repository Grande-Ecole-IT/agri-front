// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiArrowRight, FiMessageSquare } from "react-icons/fi";

export default function ChatBot() {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2 className="text-xl font-semibold text-emerald-950">
            Assistance chat
          </h2>
          <p className="text-sm text-emerald-800">
            Discuter avec notre chatbot AI
          </p>
        </motion.div>

        <motion.button
          className="p-2 hover:bg-emerald-50 rounded-full transition-colors text-emerald-800"
          whileHover={{ rotate: 45 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <FiArrowRight />
        </motion.button>
      </div>

      <motion.div
        className="flex items-center space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="w-16 h-16 rounded-lg overflow-hidden shadow-md"
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=250&auto=format&fit=crop"
            alt="AI Bot"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="flex-1">
          <p className="text-sm text-emerald-800">Need help with your plant?</p>
          <p className="text-sm font-medium text-emerald-950">
            Ask me anything about plant care!
          </p>

          <motion.button
            className="mt-3 flex items-center space-x-2 bg-emerald-100 hover:bg-emerald-200 text-emerald-800 px-4 py-2 rounded-lg text-sm font-medium"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiMessageSquare />
            <span>Start Chat</span>
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
