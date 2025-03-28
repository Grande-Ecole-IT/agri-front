import { FiArrowRight } from 'react-icons/fi';

export default function ChatBot() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-xl font-semibold">Plant Care Assistant</h2>
          <p className="text-sm text-gray-500">Chat with our AI bot</p>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <FiArrowRight />
        </button>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1531747056595-07f6cbbe10ad?q=80&w=250&auto=format&fit=crop"
            alt="AI Bot"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <p className="text-sm text-gray-600">Need help with your plant?</p>
          <p className="text-sm font-medium">Ask me anything about plant care!</p>
        </div>
      </div>
    </div>
  );
}