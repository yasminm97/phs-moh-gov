const stats = [
  { name: "إجازة", value: 45, change: "+12%", color: "text-green-600" },
  { name: "كتاب", value: 78, change: "-10%", color: "text-red-600" },
  { name: "طلب", value: 34, change: "+5%", color: "text-green-600" },
  { name: "مذكرة", value: 6, change: "-1%", color: "text-red-600" },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((s, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-lg shadow text-center border border-gray-100"
        >
          <h3 className="text-sm text-gray-500">{s.name}</h3>
          <p className="text-2xl font-bold text-ministry-charcoal">{s.value}</p>
          <p className={`text-xs ${s.color}`}>{s.change}</p>
        </div>
      ))}
    </div>
  );
}
