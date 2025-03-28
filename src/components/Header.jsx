import { motion } from "framer-motion";
import AuthButtons from "../components/ui/AuthButtons";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-lime-300">Ai</span>
        <span className="text-white">Gro</span>
      </motion.h1>

      <AuthButtons />
    </header>
  );
};

export default Header;
