import Layout from "@/components/Layout";

export default function AddSubBranch() {
  return (
    <Layout>
      <div dir="rtl" className="p-6 bg-gray-50 min-h-auto">
        <h1 className="text-2xl font-bold text-ministry-charcoal mb-6 text-center">
          إضافة تصنيف فرعي
        </h1>

        <div className="max-w-2xl mx-auto bg-white shadow rounded-lg p-8 space-y-6 border border-gray-200">
          <div>
            <label className="block text-sm font-medium mb-2">الشعبة:</label>
            <select className="w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-ministry-green">
              <option value="">اختر الشعبة</option>
              <option value="1">شعبة 1</option>
              <option value="2">شعبة 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">التصنيف:</label>
            <select className="w-full border rounded-lg p-3 text-gray-700 focus:ring-2 focus:ring-ministry-green">
              <option value="">اختر التصنيف</option>
              <option value="a">تصنيف 1</option>
              <option value="b">تصنيف 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              اسم التصنيف الفرعي:
            </label>
            <input
              type="text"
              placeholder="أدخل اسم التصنيف الفرعي"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
            />
          </div>

          <div className="">
            <button className="w-full px-6 py-2 rounded-lg bg-ministry-green text-white hover:bg-ministry-green/90 transition">
              حفظ
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
