import React from "react";
import ServiceCard from "../components/CardService";
import Header from "../components/Header";
import { motion } from "framer-motion";
import backGrounImage from "../assets/bg.jpg";

const Dashboard = () => {
  return (
    <div 
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${backGrounImage})` }}
    >
      <div className="container mx-auto backdrop-blur-xs bg-black/10">
        <Header />
        <div className="h-screen flex flex-col items-center space-y-10 justify-center rounded-xl p-10">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <div className="rounded-full bg-white text-[#235F2A] w-fit mx-auto px-6 py-2 mb-4 font-bold text-lg">Welcome to AiGro</div>
            <h1 className="text-white text-5xl font-bold mb-4">Welcome to the Dashboard</h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Expérimentez la puissance de l'IA pour améliorer votre production et ainsi augmenter vos revenus ainsi que votre notoriété.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1.5 }}
            className="flex space-x-20"
          >
            <ServiceCard />
            <ServiceCard />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
