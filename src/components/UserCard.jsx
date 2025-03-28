import { useAuth } from "../hooks/useAuth";

const UserCard = ({ saison, month }) => {
  const { user } = useAuth();

  return (
    <div className="bg-lime-100 rounded-lg shadow-md p-6 max-w-xs">
      <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
        Information de l'utilisateur
      </h2>

      <div className="space-y-3">
        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-24">Nom:</span>
          <span className="text-gray-900">{user?.name}</span>
        </div>

        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-24">Pays:</span>
          <span className="text-gray-900">{user?.pays}</span>
        </div>

        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-24">Region:</span>
          <span className="text-gray-900">{user?.region}</span>
        </div>
        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-24">Mois:</span>
          <span className="text-gray-900">{month}</span>
        </div>
        <div className="flex items-start">
          <span className="font-medium text-gray-700 w-24">Saison:</span>
          <span className="text-gray-900">{saison}</span>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
