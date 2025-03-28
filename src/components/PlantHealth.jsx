import { FiDroplet, FiSun, FiThermometer } from "react-icons/fi";
import SmartAnalysis from "./SmartAnalysis";

export default function PlantHealth() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Plant Health</h2>
      </div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FiDroplet className="text-blue-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Water Level</p>
            <p className="font-semibold">Low</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FiThermometer className="text-red-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="font-semibold">56%</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FiSun className="text-yellow-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Light</p>
            <p className="font-semibold">Indirect</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <FiDroplet className="text-green-500 text-xl" />
          <div>
            <p className="text-sm text-gray-500">Fertilization</p>
            <p className="font-semibold">Moderate</p>
          </div>
        </div>{" "}
      </div>
      <SmartAnalysis />
    </div>
  );
}
