import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiLock } from 'react-icons/fi';
import { RiPlantLine, RiRobot2Line } from 'react-icons/ri';
import Lottie from 'lottie-react';
import robotAnimation from '../assets/robot-farmer.json';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bolt-dark animate-gradient relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJub25lIiBzdHJva2U9IiMwNjRFM0IiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWRhc2hhcnJheT0iOCA4IiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-30"></div>
        
        {/* Floating Icons */}
        <div className="absolute top-20 left-20 text-bolt-light/30 text-6xl animate-float">
          <RiPlantLine />
        </div>
        <div className="absolute bottom-20 right-20 text-bolt-light/30 text-6xl animate-float" style={{ animationDelay: '-2s' }}>
          <RiPlantLine />
        </div>
        <div className="absolute top-40 right-40 text-bolt-light/30 text-4xl animate-float" style={{ animationDelay: '-4s' }}>
          <RiRobot2Line />
        </div>
        <div className="absolute bottom-20 left-20 text-bolt-light/30 text-4xl animate-float" style={{ animationDelay: '-4s' }}>
          <RiRobot2Line />
        </div>
      </div>
      
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
            <span className='text-lime-300'>Ai</span>
            Gro
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-bolt-dark">
              Email
            </label>
            <div className="relative group">
              <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all bg-white/50 backdrop-blur-xs"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium text-bolt-dark">
              Mot de passe
            </label>
            <div className="relative group">
              <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-bolt-gray group-hover:text-bolt-dark transition-colors" />
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-bolt-gray/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-bolt-dark/20 focus:border-transparent transition-all bg-white/50 backdrop-blur-xs"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-lime-300 from-bolt-dark to-bolt-light text-bolt-dark font-medium rounded-lg hover:opacity-90 transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Se connecter
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-bolt-dark via-bolt-light to-bolt-dark bg-[length:200%_100%] animate-[gradient_3s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </form>

        <div className="text-center text-sm">
          <Link to="/forgot-password" className="text-bolt-dark hover:text-bolt-light transition-colors">
            Mot de passe oublié ?
          </Link>
        </div>

        <div className="text-center text-sm">
          <span className="text-bolt-gray">Pas encore de compte ?</span>{' '}
          <Link to="/register" className="text-bolt-dark font-medium hover:text-bolt-light transition-colors">
            S&apos;inscrire
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;