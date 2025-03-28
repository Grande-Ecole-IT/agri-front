// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineClose, AiOutlineCloudUpload } from "react-icons/ai";
import { ImSpinner9 } from "react-icons/im";
import { useNavigate } from "react-router";
import assistance from "../assets/assistance.jpg";
import bg from "../assets/bg.jpg";
import fond from "../assets/fond.jpg";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import { useLoading } from "../hooks/useLoading";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState();
  const navigate = useNavigate();
  const { loading, stopLoading, startLoading } = useLoading();

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
    }
  };

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setFile(null);
  };

  const postData = async (dataToSend) => {
    if (!file) return;
    try {
      const response = await fetch(
        "https://agri-back-fo2l.onrender.com/plant-healths/",
        {
          method: "POST",
          body: dataToSend,
        }
      );

      if (!response.ok) {
        toast.error("Image non envoyee");
        throw new Error(`Erreur HTTP: ${response.status}`);
      }

      const result = await response.json();
      setAnalysis(result);
      navigate("/analysis", { state: { result, image: file } });
      stopLoading();
      toast.success("Image envoyee");
    } catch (error) {
      toast.error("Server error");
      console.error("Erreur lors de l'envoi de l'image :", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startLoading();
    const formData = new FormData();
    formData.append("plant_image", file);
    postData(formData);
  };

  console.log(analysis);
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
                buttonText="Générer"
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
                  <form onSubmit={handleSubmit}>
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
                        Faites glisser & déposez votre fichier ici ou cliquez
                        pour sélectionner
                        <input
                          id="file-upload"
                          type="file"
                          name="image"
                          accept="image/*" // Limite le téléchargement aux images
                          className={`hidden ${
                            file ? "cursor-not-allowed" : ""
                          }`} // Désactive l'input après upload
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

                    <button className="w-full flex items-center justify-center space-x-4 mt-5 bg-green-600 text-white py-2 rounded-xl hover:bg-green-700 transition">
                      {loading && <ImSpinner9 className="text-xl animate-spin"/>}
                      <span>Soumettre</span>
                    </button>
                  </form>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#1e2939",
            color: "#fff",
            borderRadius: "8px",
            padding: "16px",
            border: "1px solid #364153",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          },
        }}
      />
    </div>
  );
};

export default Dashboard;
