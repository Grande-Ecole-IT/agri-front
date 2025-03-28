import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import ChatBot from "./ChatBot";
import { useEffect, useState } from "react";

export default function GrowthChart({ symptoms }) {
  const [data, setData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("Month");

  useEffect(() => {
    if (symptoms && symptoms.progression_speed) {
      const speed = symptoms.progression_speed; // La vitesse de progression
      const initialValue = 2; // La valeur initiale arbitraire pour commencer le graphique
      
      const generatedData = Array.from({ length: 5 }, (_, index) => ({
        name: ["Aug", "Sep", "Oct", "Nov", "Dec"][index],
        value: initialValue + index * (speed / 10) // On augmente la valeur selon la vitesse de progression
      }));

      setData(generatedData);
    }
  }, [symptoms]);

  return (
    <div className="grid grid-rows-1 space-y-6">
      <div className="bg-[#E8F3DC] rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Croissance</h2>
          <select
            className="bg-transparent border-none text-sm cursor-pointer hover:opacity-75"
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
          >
            <option value="Month">Mois</option>
            <option value="Week">Semaine</option>
            <option value="Year">Année</option>
          </select>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis hide />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#4CAF50"
                strokeWidth={2}
                dot={{ fill: "#4CAF50" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <ChatBot />
    </div>
  );
}
