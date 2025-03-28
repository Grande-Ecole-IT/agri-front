// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const periods = [
  { value: "Week", label: "Semaine" },
  { value: "Month", label: "Mois" },
  { value: "Year", label: "Année" },
];

export default function GrowthChart({ symptoms }) {
  const [data, setData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("Month");

  useEffect(() => {
    if (symptoms && symptoms.progression_speed) {
      const speed = symptoms.progression_speed;
      const initialValue = 2;

      const generatedData = Array.from({ length: 5 }, (_, index) => ({
        name: ["Aug", "Sep", "Oct", "Nov", "Dec"][index],
        value: initialValue + index * (speed / 10),
      }));

      setData(generatedData);
    }
  }, [symptoms]);

  return (
    <motion.div
      className="bg-[#E8F3DC] rounded-xl p-6 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Growth Progress</h2>
        <div className="flex space-x-2 bg-white/50 rounded-lg p-1">
          {periods.map((period) => (
            <motion.button
              key={period.value}
              className={`px-3 py-1 text-sm rounded-md ${
                selectedPeriod === period.value ? "bg-white shadow-sm" : ""
              }`}
              onClick={() => setSelectedPeriod(period.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {period.label}
            </motion.button>
          ))}
        </div>
      </div>

      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6B7280" }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: "8px",
                border: "none",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4CAF50"
              strokeWidth={3}
              dot={{
                fill: "#4CAF50",
                strokeWidth: 2,
                r: 5,
                stroke: "#fff",
              }}
              activeDot={{
                r: 8,
                stroke: "#fff",
                strokeWidth: 2,
                fill: "#2E7D32",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <motion.div
        className="mt-4 flex justify-between text-sm text-gray-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <span>Slow</span>
        <span>Moderate</span>
        <span>Fast</span>
      </motion.div>
    </motion.div>
  );
}
