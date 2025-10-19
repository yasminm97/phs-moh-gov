import CardTable from "@/components/CardTable";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import letters from "@/data/letters.json";

export default function IncomingLetters() {
  const letterColumns = [
    { key: "number", label: "رقم الكتاب" },
    { key: "subject", label: "الموضوع" },
  ];
  return (
    <Layout>
      <section className="bg-white rounded-2xl shadow p-6" dir="rtl">
        <div className="flex justify-between">
          <div className="flex flex-col items-right justify-between mb-4">
            <h2 className="text-lg font-bold text-ministry-charcoal">
              اخر الكتب الصادرة
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

        <div dir="ltr" className="flex justify-between">
          <SearchBar />
        </div>

        <div className="overflow-x-auto">
          <CardTable rows={letters} columns={letterColumns} />
        </div>
      </section>
    </Layout>
  );
}
