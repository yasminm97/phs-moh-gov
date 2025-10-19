export default function Step1PersonalForm() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          الشعبة:
        </label>
        <select className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none">
          <option>اختر الشعبة</option>
          <option>الاجازات</option>
          <option>الهندسية</option>
          <option>الاستثمار الصحي الخاص</option>
          <option>النفقة الخاصة</option>
          <option>الاوراق</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          التصنيف:
        </label>
        <select className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none">
          <option>اختر التصنيف</option>
          <option>رفع مخططات</option>
          <option>اجراء كشف اولي</option>
          <option>اجراء كشف نهائي</option>
          <option>مخاطبة دائرة البلدية</option>
          <option>مخطابات البيئة</option>
          <option>البريد المركزي</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          التصنيف الفرعي:
        </label>
        <select className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none">
          <option>اختر التصنيف الفرعي</option>
        </select>
      </div>

      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          الاسم الرباعي و اللقب:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          اسم الأم الثلاثي:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          الجنسية:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="w-40 text-right text-sm font-medium text-gray-700">
          رقم الهاتف:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>
    </div>
  );
}
