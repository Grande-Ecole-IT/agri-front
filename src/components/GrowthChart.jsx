import { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function GrowthChart({ symptoms }) {
  const [data, setData] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("Month");

  useEffect(() => {
    if (symptoms && symptoms.progression_speed) {
      const speed = symptoms.progression_speed;
      const initialValue = 2;

      let generatedData = [];

      if (selectedPeriod === "Month") {
        generatedData = Array.from({ length: 5 }, (_, index) => ({
          name: ["Jan", "Feb", "Mar", "Apr", "May"][index],
          value: initialValue + index * (speed / 10),
        }));
      } else if (selectedPeriod === "Week") {
        generatedData = Array.from({ length: 7 }, (_, index) => ({
          name: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][index],
          value: initialValue + index * (speed / 20),
        }));
      } else if (selectedPeriod === "Year") {
        generatedData = Array.from({ length: 12 }, (_, index) => ({
          name: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ][index],
          value: initialValue + index * (speed / 5),
        }));
      }

      setData(generatedData);
    }
  }, [symptoms, selectedPeriod]);

  return (
<<<<<<< HEAD
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

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" tick={{ fill: "#333" }} />
              <YAxis tick={{ fill: "#333" }} />
              <Tooltip />
              <Bar dataKey="value" fill="#4CAF50" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
=======
    <motion.div
      className="bg-white rounded-xl p-6 shadow-lg border border-emerald-100 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-between items-center mb-4">
        <motion.h2
          className="text-xl font-semibold text-emerald-950"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Vitesse de propagation
        </motion.h2>

        <motion.div
          className="flex space-x-2 bg-emerald-50 rounded-lg p-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {periods.map((period) => (
            <motion.button
              key={period.value}
              className={`px-3 py-1 text-sm rounded-md ${
                selectedPeriod === period.value
                  ? "bg-emerald-100 text-emerald-800 shadow-sm"
                  : "text-emerald-700"
              }`}
              onClick={() => setSelectedPeriod(period.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {period.label}
            </motion.button>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="h-48"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
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
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#059669"
              strokeWidth={3}
              dot={{
                fill: "#059669",
                strokeWidth: 2,
                r: 5,
                stroke: "#fff",
              }}
              activeDot={{
                r: 8,
                stroke: "#fff",
                strokeWidth: 2,
                fill: "#065f46",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>
    </motion.div>
>>>>>>> 541255c (Theme white pour calendrier et analysis)
  );
}
