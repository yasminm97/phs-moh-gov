import {
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const lineData = [
  { name: "1", value: 10 },
  { name: "7", value: 20 },
  { name: "13", value: 30 },
  { name: "19", value: 25 },
  { name: "25", value: 40 },
  { name: "30", value: 35 },
];

const pieData = [
  { name: "كتب", value: 45 },
  { name: "تقارير", value: 20 },
  { name: "إجازات", value: 35 },
  { name: "مذكرات", value: 10 },
];

const COLORS = ["#22c55e", "#facc15", "#3b82f6", "#ef4444"];

export default function ChartsSection() {
  return (
    <div className="text-right grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Line Chart */}
      <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
        <h3 className="text-sm font-medium text-gray-600 mb-2">
          النشاط الشهري
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#22c55e"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white rounded-lg shadow p-4 border border-gray-100">
        <h3 className="text-sm font-medium text-gray-600 mb-2">التوزيع</h3>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={70}
              label
            >
              {pieData.map((entry, idx) => (
                <Cell key={idx} fill={COLORS[idx % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
