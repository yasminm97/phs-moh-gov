const items = [
  { name: "محل سما البشائر", person: "إشراق عبدالجبار", progress: 90 },
  { name: "محل سما البشائر", person: "إشراق عبدالجبار", progress: 70 },
  { name: "محل سما البشائر", person: "إشراق عبدالجبار", progress: 40 },
];

export default function ImportantList() {
  return (
    <div className="text-right bg-white rounded-lg shadow p-4 border border-gray-100">
      <h3 className="text-sm font-medium text-gray-600 mb-4">
        أهم المستثمرين و المؤسسات
      </h3>
      <div className="space-y-3">
        {items.map((item, idx) => (
          <div key={idx}>
            <div className="flex justify-between text-sm text-gray-700">
              <span>{item.name}</span>
              <span>{item.person}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
              <div
                className="bg-ministry-green h-2 rounded-full"
                style={{ width: `${item.progress}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
