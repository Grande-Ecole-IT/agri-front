// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router";
import logo from "../assets/logo.png";
import AuthButtons from "../components/ui/AuthButtons";
import { useAuth } from "../hooks/useAuth";
import UserMenu from "./UserMenu";

const Header = () => {
  const { user } = useAuth();

  return (
    <header className="flex justify-between items-center">
      <motion.h1
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link to="/">
          <img src={logo} alt="logo" className="w-20 h-20" />
        </Link>
      </motion.h1>

      {user ? <UserMenu /> : <AuthButtons />}
    </header>
  );
};

export default Header;
