import Layout from "@/components/Layout";
import letters from "@/data/letters.json";
export default function IncomingLetters() {
  return (
    <Layout>
      <section className="bg-white rounded-2xl shadow p-6" dir="rtl">
        <div className="flex justify-between">
          <div className="flex flex-col items-right justify-between mb-4">
            <h2 className="text-lg font-bold text-ministry-charcoal">
              اخر الكتب الواردة
            </h2>
            <span className="text-sm text-gray-500">
              عدد الكتب الكلي : {letters?.length || 0}
            </span>
          </div>

          <div className="flex gap-4 mb-6">
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow px-4 py-2">
              <span className="text-lg font-bold">3</span>
              <span className="text-sm text-gray-600">كتاب</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow px-4 py-2">
              <span className="text-lg font-bold">1</span>
              <span className="text-sm text-gray-600">طلب</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-gray-100 rounded-xl shadow px-4 py-2">
              <span className="text-lg font-bold">2</span>
              <span className="text-sm text-gray-600">مذكرة</span>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-separate border-spacing-y-2">
            <thead>
              <tr className="text-sm text-gray-600 border-b">
                <th className="px-4 py-2">رقم الكتاب</th>
                <th className="px-4 py-2">الموضوع</th>
              </tr>
            </thead>
            <tbody>
              {letters?.map((letter, idx) => (
                <tr
                  key={idx}
                  className="bg-gray-50 hover:bg-gray-100 rounded-lg"
                >
                  <td className="px-4 py-2">{letter.number}</td>
                  <td className="px-4 py-2">{letter.subject}</td>
                </tr>
              )) || (
                <tr>
                  <td colSpan={2} className="text-center py-4 text-gray-400">
                    لا توجد كتب حالياً
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </Layout>
  );
}
