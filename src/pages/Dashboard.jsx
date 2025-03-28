// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineCloudUpload } from "react-icons/ai";
import { useNavigate } from "react-router";
import assistance from "../assets/assistance.jpg";
import bg from "../assets/bg.jpg";
import fond from "../assets/fond.jpg";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null); // Gérer un seul fichier au lieu d'un tableau

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0]; // Récupérer le premier fichier
    if (uploadedFile) {
      // Si un fichier est téléchargé, le définir
      setFile(uploadedFile);
    }
  };

  const handleClick = () => {
    console.log("Ds");
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFile(null); // Réinitialiser le fichier après la fermeture du modal
  };

  const handleSubmit = () => {
    console.log("Fichier uploadé :", file);
    setFile(null); // Réinitialiser le fichier après soumission
    setIsModalOpen(false); // Fermer le modal après soumission
  };

  const navigate = useNavigate();
  return (
    <div
      className="relative min-h-screen overflow-hidden bg-cover bg-center"
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
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full "
            >
              <ServiceCard
                title="Diagnostic des maladies"
                content="Notre IA analyse en temps réel l'état de santé de vos plantes et identifie les maladies, carences ou problèmes environnementaux."
                buttonText="Essayer maintenant"
                image={assistance}
                action={handleClick}
              />
              <ServiceCard
                title="Calendrier cultural intelligent"
                content="Recevez des recommandations personnalisées sur les cultures à planter chaque mois selon votre sol et climat."
                buttonText="Démarrer"
                image={fond}
                action={() => navigate("/calendrier")}
              />
            </motion.div>

            {isModalOpen && (
              <div className="fixed inset-0 backdrop-blur-xl bg-black/50 flex items-center justify-center z-50">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-2xl p-6 w-1/3 space-y-4 shadow-lg relative"
                >
                  <button
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                    onClick={closeModal}
                  >
                    <AiOutlineClose size={24} />
                  </button>
                  <h2 className="text-2xl font-bold mb-2">
                    Télécharger des fichiers
                  </h2>
                  <p className="text-gray-500 mb-4">
                    Téléchargez vos fichiers de projet ici.
                  </p>

                  <div className="border-2 border-green-400 bg-green-50 p-4 rounded-xl text-center cursor-pointer hover:bg-green-100 transition">
                    <AiOutlineCloudUpload
                      size={40}
                      className="mx-auto mb-2 text-green-600"
                    />
                    <label
                      htmlFor="file-upload"
                      className="cursor-pointer text-green-600 font-semibold"
                    >
                      Faites glisser & déposez votre fichier ici ou cliquez pour
                      sélectionner
                      <input
                        id="file-upload"
                        type="file"
                        accept="image/*" // Limite le téléchargement aux images
                        className={`hidden ${file ? "cursor-not-allowed" : ""}`} // Désactive l'input après upload
                        onChange={handleFileUpload}
                        disabled={file} // Désactive l'input après upload
                      />
                    </label>
                  </div>

                  {/* Affichage de l'aperçu de l'image téléchargée */}
                  {file && (
                    <div className="mt-4 text-center">
                      <h3 className="text-lg font-bold mb-2">
                        Aperçu de l'image
                      </h3>
                      <img
                        src={URL.createObjectURL(file)} // Générer l'URL temporaire pour l'image
                        alt="Preview"
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  )}

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition"
                  >
                    Soumettre
                  </button>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
