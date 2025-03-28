// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiArrowRight, FiMessageSquare } from "react-icons/fi";

export default function ChatBot() {
  return (
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">Plant Care Assistant</h2>
          <p className="text-sm text-gray-500">Chat with our AI bot</p>
        </div>
        <motion.button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          whileHover={{ rotate: 45 }}
          whileTap={{ scale: 0.9 }}
        >
          <FiArrowRight />
        </motion.button>
      </div>

      <div className="flex items-center space-x-4">
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
          <p className="text-sm text-gray-600">Need help with your plant?</p>
          <p className="text-sm font-medium">
            Ask me anything about plant care!
          </p>

          <motion.button
            className="mt-3 flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-lg text-sm"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiMessageSquare />
            <span>Start Chat</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
