import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import ChatBot from "./ChatBot";
import { div } from "framer-motion/client";

const data = [
  { name: "Aug", value: 2 },
  { name: "Sep", value: 3 },
  { name: "Oct", value: 2 },
  { name: "Nov", value: 4 },
  { name: "Dec", value: 3 },
];

export default function GrowthChart() {
  return (
    <div className="grid grid-rows-1 space-y-6">
      <div className="bg-[#E8F3DC] rounded-xl p-6 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Growth</h2>
          <select className="bg-transparent border-none text-sm cursor-pointer hover:opacity-75">
            <option>Month</option>
            <option>Week</option>
            <option>Year</option>
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
