import { FiPause } from 'react-icons/fi';

export default function SmartAnalysis() {
  return (
    <div className="bg-gray-600 text-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-xl font-semibold">Traitements conseille</h2>
          <p className="text-sm text-gray-300">Ecoutes vocal des traitements</p>
        </div>
        <button className="p-2 bg-gray-500 rounded-full hover:bg-gray-400 transition-colors">
          <FiPause />
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <span className="text-sm">1x</span>
        <div className="flex-1 h-12">
          <div className="w-full h-full bg-gray-700 rounded-lg overflow-hidden">
            <div className="h-full flex items-center space-x-1 px-2">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className="flex-1 h-6 bg-green-400 rounded"
                  style={{ opacity: Math.random() }}
                />
              ))}
            </div>
          </div>
        </div>
        <span className="text-sm">20:16</span>
      </div>
    </div>
  );
}