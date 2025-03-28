import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const UserMenu = () => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout().then(() => navigate("/login"));
  };

  return (
    <div className="relative flex items-center space-x-4" ref={dropdownRef}>
      <p className="text-white font-semibold">{user?.name}</p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-lime-300 hover:bg-lime-400 focus:ring-2 focus:outline-none focus:ring-lime-300 font-medium text-sm px-3 py-2 text-center inline-flex items-center rounded-full"
        type="button"
      >
        {user?.name.charAt(0).toUpperCase()}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-12 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <div className="px-4 py-3 text-sm text-gray-900">
            <div className="font-medium">{user?.name}</div>
            <div className="truncate">{user?.email}</div>
          </div>
          <div className="py-2">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
