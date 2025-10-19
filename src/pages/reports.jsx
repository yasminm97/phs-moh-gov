import Layout from "@/components/Layout";
import letters from "@/data/letters.json";
export default function Reports() {
  return (
    <Layout>
      <div dir="rtl" className="p-6 bg-gray-50 min-h-screen space-y-6">
        <div className="bg-white p-6 rounded-xl shadow border space-y-4">
          <h2 className="text-lg font-bold text-ministry-charcoal mb-4">
            تقارير النظام
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                من:
              </label>
              <input
                type="date"
                className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:ring-2 focus:ring-ministry-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                إلى:
              </label>
              <input
                type="date"
                className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:ring-2 focus:ring-ministry-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                موضوع الكتاب:
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:ring-2 focus:ring-ministry-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                جهة الكتاب:
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:ring-2 focus:ring-ministry-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                رقم الكتاب:
              </label>
              <input
                type="text"
                className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:ring-2 focus:ring-ministry-green"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600">
                تاريخ الكتاب:
              </label>
              <input
                type="date"
                className="mt-1 w-full rounded-lg border-gray-300 p-2 focus:ring-2 focus:ring-ministry-green"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button className="w-full mt-4 px-6 py-2 rounded-lg bg-ministry-green text-white hover:bg-ministry-green/90 transition">
              تحديث البيانات
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-700">
              عدد البطاقات
            </h3>
            <p className="text-3xl font-bold text-ministry-green mt-2">24</p>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <h3 className="text-lg font-semibold text-gray-700">عدد الرخص</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">16</p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow overflow-x-auto">
          <table className="min-w-full text-right">
            <thead className="bg-ministry-green text-white">
              <tr>
                <th className="px-4 py-3">رقم الكتاب</th>
                <th className="px-4 py-3">الموضوع</th>
              </tr>
            </thead>
            <tbody>
              {letters.map((row, idx) => (
                <tr
                  key={idx}
                  className="border border-gray-200 hover:bg-gray-100 transition"
                >
                  <td className="px-4 py-3">{row.id}</td>
                  <td className="px-4 py-3">{row.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
