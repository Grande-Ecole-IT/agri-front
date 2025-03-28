// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import AuthButtons from "../components/ui/AuthButtons";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={logo} alt="logo" className="w-20 h-20" />
      </motion.h1>

      <AuthButtons />
    </header>
  );
};

export default Header;
