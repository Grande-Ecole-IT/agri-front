// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React from "react";
import assistance from "../assets/assistance.jpg";
import bg from "../assets/bg.jpg";
import fond from "../assets/fond.jpg";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const Dashboard = () => {
  return (
    <div
      className="relative h-screen overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="backdrop-blur-xs bg-black/50">
        <div className="container mx-auto">
          <Header />

          <div className="flex flex-col items-center py-20 px-4">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Optimisez votre agriculture <br />
                avec l'intelligence artificielle
              </h1>
              <p className="text-white text-lg md:text-xl max-w-3xl mx-auto">
                Découvrez des solutions innovantes pour augmenter vos rendements
                et réduire vos coûts grâce à nos technologies intelligentes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, staggerChildren: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full max-w-6xl"
            >
              <ServiceCard
                title="Diagnostic des maladies"
                content="Notre IA analyse en temps réel l'état de santé de vos plantes et identifie les maladies, carences ou problèmes environnementaux."
                buttonText="Essayer maintenant"
                image={assistance}
                action={() => {}}
              />
              <ServiceCard
                title="Calendrier cultural intelligent"
                content="Recevez des recommandations personnalisées sur les cultures à planter chaque mois selon votre sol et climat."
                buttonText="Démarrer"
                image={fond}
                action={() => {}}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
