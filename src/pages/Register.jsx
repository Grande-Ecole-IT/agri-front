import Lottie from "lottie-react";
import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { RiPlantLine, RiRobot2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import robotAnimation from "../assets/robot-farmer.json";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    region: "",
    country: "",
    password: "",
  });

  const {signup} = useAuth();

  const handleChange = (e) => {
    setInfo({...info, [e.target.name]: e.target.value});
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    signup(info).then(console.log).catch(console.log);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-dark animate-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiMwNjRFM0IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iOCA4IiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30"></div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-20 text-light/30 text-6xl animate-float">
          <RiPlantLine />
        </div>
        <div
          className="absolute bottom-20 right-20 text-light/30 text-6xl animate-float"
          style={{ animationDelay: "-2s" }}
        >
          <RiPlantLine />
        </div>
        <div
          className="absolute top-40 right-40 text-light/30 text-4xl animate-float"
          style={{ animationDelay: "-4s" }}
        >
          <RiRobot2Line />
        </div>
        <div
          className="absolute bottom-20 left-20 text-light/30 text-4xl animate-float"
          style={{ animationDelay: "-4s" }}
        >
          <RiRobot2Line />
        </div>
      </div>

      <div className="w-full max-w-3xl p-8 space-y-8 bg-white/100 backdrop-blur-sm rounded-2xl shadow-2xl border border-bolt-light/20 relative z-10 hover:shadow-bolt-dark/20 transition-all duration-300">
        {/* Logo Animation */}
        <div className="text-center relative">
          <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-32 h-32">
            <Lottie
              animationData={robotAnimation}
              loop={true}
              className="w-full h-full"
            />
          </div>
          <h2 className="text-4xl font-bold text-bolt-dark mt-9 mb-2">
            Sign <span className="text-lime-300">Up</span>
          </h2>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center space-y-6"
        >
          <div className="grid grid-cols-2 gap-5 w-full">
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="name"
                className="text-sm font-medium text-bolt-dark"
              >
                Nom
              </label>
              <div className="relative group">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={info.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all bg-white/50 backdrop-blur-xs"
                  placeholder="Nom complet"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-bolt-dark"
              >
                Pays
              </label>
              <div className="relative group">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
                <input
                  id="country"
                  type="country"
                  name="country"
                  value={info.country}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all bg-white/50 backdrop-blur-xs"
                  placeholder="Madagascar"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-bolt-dark"
              >
                email
              </label>
              <div className="relative group">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={info.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all bg-white/50 backdrop-blur-xs"
                  placeholder="votre@email.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="email"
                className="text-sm font-medium text-bolt-dark"
              >
                Region
              </label>
              <div className="relative group">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
                <input
                  id="region"
                  type="region"
                  name="region"
                  value={info.region}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all bg-white/50 backdrop-blur-xs"
                  placeholder="Antananarivo"
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
                  name="password"
                  type="password"
                  value={info.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all bg-white/50 backdrop-blur-xs"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-4 bg-lime-300 from-bolt-dark to-bolt-light text-bolt-dark font-medium rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              S&apos;inscrire
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-bolt-dark via-bolt-light to-bolt-dark bg-[length:200%_100%] animate-[gradient_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </form>
        <div className="text-center text-sm">
          <span className="text-bolt-gray">As deja un compte ?</span>{" "}
          <Link
            to="/login"
            className="text-bolt-dark font-medium hover:text-bolt-light transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
