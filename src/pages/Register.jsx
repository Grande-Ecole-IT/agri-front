import { useState } from "react";
import { FaPlaceOfWorship } from "react-icons/fa";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { ImSpinner9 } from "react-icons/im";
import { MdPlace } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import BackIcon from "../components/BackIcon";
import MainBackground from "../components/MainBackground";
import { useAuth } from "../hooks/useAuth";
import { useLoading } from "../hooks/useLoading";

const Register = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    region: "",
    country: "",
    password: "",
  });

  const { signup } = useAuth();
  const { loading, stopLoading, startLoading } = useLoading();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    startLoading();
    signup(info)
      .then(() => navigate("/login", { replace: true }))
      .catch(console.log)
      .finally(stopLoading);
  };

  return (
    <MainBackground>
      <BackIcon />

      <div className="w-full max-w-3xl p-8 space-y-8 bg-white rounded-2xl shadow-2xl border border-bolt-light/20 relative z-10 hover:shadow-bolt-dark/20 transition-all duration-300">
        <div className="text-center relative">
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
              <div className="relative ">
                <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={info.name}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all bg-white/50"
                  placeholder="Nom"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="pays"
                className="text-sm font-medium text-bolt-dark"
              >
                Pays
              </label>
              <div className="relative group">
                <MdPlace className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
                <input
                  id="country"
                  type="country"
                  name="country"
                  value={info.country}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all"
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
                Email
              </label>
              <div className="relative group">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={info.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all"
                  placeholder="Email@gmail.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="region"
                className="text-sm font-medium text-bolt-dark"
              >
                Region
              </label>
              <div className="relative group">
                <FaPlaceOfWorship className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
                <input
                  id="region"
                  type="region"
                  name="region"
                  value={info.region}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all"
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
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 " />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={info.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full flex items-center justify-center space-x-4 py-3 px-4 bg-lime-300 from-bolt-dark to-bolt-light text-bolt-dark font-medium rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
          >
            {loading && <ImSpinner9 className="text-xl animate-spin" />}
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
            className="text-bolt-dark font-medium hover:text-bolt-light transition-colors text-lime-600"
          >
            Login
          </Link>
        </div>
      </div>
    </MainBackground>
  );
};

export default Register;
