import { useAuth } from "../hooks/useAuth";

const UserMenu = () => {
  const { user } = useAuth();

  return (
    <div className="bg-lime-300 rounded-full p-2">{user?.name.charAt(0)}</div>
  );
};

export default UserMenu;
