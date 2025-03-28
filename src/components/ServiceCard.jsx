// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { VscArrowRight } from "react-icons/vsc";

const ServiceCard = ({ title, content, buttonText, action, image }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col md:flex-row h-full shadow-slate-800/30 border border-gray-100"
    >
      <div className="p-8 md:w-2/3 flex flex-col">
        <h2 className="text-2xl font-bold text-emerald-900 mb-4">{title}</h2>
        <p className="text-gray-600 mb-8 flex-grow">{content}</p>

        <motion.div
          whileHover={{ scale: 1.02 }}
          className="self-start" // Aligne le bouton à gauche
        >
          <motion.button
            whileHover={{
              backgroundColor: "#047857", // Une teinte plus foncée au survol
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white px-5 py-2.5 rounded-full shadow-md hover:shadow-emerald-200 transition-all"
            onClick={action}
          >
            <span className="whitespace-nowrap">{buttonText}</span>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{
                opacity: 1,
                x: 0,
                transition: {
                  x: {
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 1.5,
                    ease: "easeInOut",
                  },
                },
              }}
              whileHover={{ x: 5 }}
            >
              <VscArrowRight size={18} />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>

      <div className="md:w-1/3 h-64 md:h-auto overflow-hidden">
        <img
          src={image}
          alt="Service"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </motion.div>
  );
};

export default ServiceCard;
