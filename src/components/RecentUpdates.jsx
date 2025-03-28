import { FiDroplet, FiSun, FiTrendingUp } from 'react-icons/fi';

export default function RecentUpdates() {
  const updates = [
    {
      icon: <FiTrendingUp />,
      title: 'Growth rate: 5%',
      tag: 'Growth',
      date: 'Nov 12, 2024',
    },
    {
      icon: <FiDroplet />,
      title: 'Soil moisture: Low',
      tag: 'Watering',
      date: 'Oct 27, 2024',
    },
    {
      icon: <FiSun />,
      title: 'Excessive light',
      tag: 'Light',
      date: 'Nov 16, 2024',
    },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Recent Updates</h2>
        <button className="text-sm text-gray-500 hover:text-gray-700">See all</button>
      </div>
      
      <div className="space-y-4">
        {updates.map((update, index) => (
          <div key={index} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-gray-100 rounded-full">
                {update.icon}
              </div>
              <div>
                <p className="font-medium">{update.title}</p>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                  {update.tag}
                </span>
              </div>
            </div>
            <span className="text-sm text-gray-500">{update.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}