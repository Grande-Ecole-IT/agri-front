import React from "react";
import { motion } from "framer-motion";
import { VscArrowRight } from "react-icons/vsc";

const ServiceCard = () => {
  return (
    <div className="bg-[#F5F0E8] rounded-2xl p-6 max-w-md flex items-center justify-between shadow-lg">
      <div>
        <h2 className="text-2xl font-bold text-[#235F2A] mb-2">
          DJI Agras T50
        </h2>
        <p className="text-gray-600 mb-6">
          Fully automatic and manual operation
          <br />
          Orchard mode variable rate
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="flex items-center gap-2 px-4 py-2 bg-[#235F2A] text-white rounded-full shadow hover:bg-[#1e4f24]"
        >
          Explore More
          <motion.div
            initial={{ x: 0 }}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <VscArrowRight size={20} />
          </motion.div>
        </motion.button>
      </div>

      <div>
        <img
          src="https://dummyimage.com/150x150/000/fff"
          alt="DJI Agras T50"
          className="rounded-xl"
        />
      </div>
    </div>
  );
};

export default ServiceCard;
