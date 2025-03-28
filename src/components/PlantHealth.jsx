import {
  FiAlertCircle,
  FiCalendar,
  FiDroplet,
  FiThermometer,
} from "react-icons/fi";

export default function PlantHealth(data) {
  console.dir(data.data.symptoms);
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          Diagnostic de la plante : {data.data.type}
        </h2>
      </div>
      <div className="grid h-1/2 grid-cols-2 gap-4 mb-3">
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FiAlertCircle className="text-red-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Maladie détectée</p>
            <p className="font-semibold">{data.data.symptoms.name}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FiDroplet className="text-blue-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Cause probable</p>
            <p className="font-semibold">{data.data.symptoms.cause}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FiThermometer className="text-orange-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Gravité</p>
            <p className="font-semibold">{data.data.symptoms.severity}</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FiCalendar className="text-yellow-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Saison propice</p>
            <p className="font-semibold">
              {data.data.symptoms.seasonal_tendency}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
