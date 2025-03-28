import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router";

const BackIcon = () => {
  return (
    <Link
      to="/"
      className="absolute top-6 left-6 flex items-center gap-2 text-white border border-white px-4 py-2 rounded-full transition-colors duration-200 z-10 group"
      aria-label="back"
    >
      <FaArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
      <span className="hidden sm:inline">Back to Home</span>
    </Link>
  );
};

export default BackIcon;
