import { useRouter } from "next/router";

const recentLetters = [
  { number: "123", subject: "مذكرة تعاون مع وزارة التعليم", progress: 100 },
  { number: "124", subject: "طلب فتح مستشفى خاص", progress: 80 },
  { number: "125", subject: "كتاب رسمي لتجديد إجازة", progress: 60 },
];

export default function ImportantList() {
  const router = useRouter();
  return (
    <div className="text-right bg-white rounded-lg shadow p-4 border border-gray-100">
      <h3 className="text-m font-semibold text-gray-600 mb-4">
        الكتب المضافة حديثاً
      </h3>
      <div className="overflow-x-auto bg-white rounded-lg shadow mb-6">
        <table className="min-w-full text-right">
          <tbody>
            {recentLetters.map((row, idx) => (
              <tr
                key={idx}
                className="border border-gray-300 hover:bg-gray-100 transition cursor-pointer"
                onClick={() => router.push(`/letter-details`)}
              >
                <td className="px-4 py-3">{row.number}</td>
                <td className="px-4 py-3">{row.subject}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
