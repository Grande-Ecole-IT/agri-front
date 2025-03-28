import Lottie from "lottie-react";
import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";
import { Link } from "react-router-dom";
import robotAnimation from "../assets/robot-farmer.json";
import DataRain from "../components/background/DataRain";
import FloatingLeaves from "../components/background/FloatingLeaves";
import Hologrid from "../components/background/Hologrid";
import PulseEffect from "../components/ui/PulseEffect";
import { useAuth } from "../hooks/useAuth";
import { useLoading } from "../hooks/useLoading";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { loading, stopLoading, startLoading } = useLoading();

  const handleSubmit = (e) => {
    e.preventDefault();
    startLoading();
    login(email, password).catch(console.log).finally(stopLoading);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 relative overflow-hidden">
      <Hologrid />
      <DataRain />
      <FloatingLeaves />
      <PulseEffect />

      <div className="w-full max-w-md p-8 space-y-8 bg-white backdrop-blur-sm rounded-2xl shadow-2xl border border-bolt-light/20 relative z-10 hover:shadow-bolt-dark/20 transition-all duration-300">
        {/* Logo Animation */}
        <div className="text-center relative">
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-32 h-32">
            <Lottie
              animationData={robotAnimation}
              loop={true}
              className="w-full h-full"
            />
          </div>
          <h2 className="text-4xl font-bold text-bolt-dark mt-12 mb-2">
            <span className="text-lime-300">Log</span>
            In
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col space-y-3">
            <label
              htmlFor="email"
              className="text-sm font-medium text-bolt-dark"
            >
              Email
            </label>
            <div className="relative group">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all "
                placeholder="email@gmail.com"
                required
              />
            </div>
          </div>

          <div className="flex flex-col space-y-3">
            <label
              htmlFor="password"
              className="text-sm font-medium text-bolt-dark"
            >
              Mot de passe
            </label>
            <div className="relative group">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all"
                placeholder="Password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-4 py-3 px-4 bg-lime-300 from-bolt-dark to-bolt-light text-bolt-dark font-medium rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
          >
            {loading && <ImSpinner9 className="text-xl animate-spin" />}
            <span className="relative z-10 flex items-center justify-center gap-2">
              Se connecter
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-bolt-dark via-bolt-light to-bolt-dark bg-[length:200%_100%] animate-[gradient_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </form>

        <div className="text-center text-sm">
          <span className="text-bolt-gray">Pas encore de compte ?</span>{" "}
          <Link
            to="/register"
            className="text-bolt-dark font-medium text-lime-600 transition-colors"
          >
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
