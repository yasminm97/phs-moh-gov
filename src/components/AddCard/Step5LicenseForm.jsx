export default function Step5LicenseForm() {
  return (
    <div className="space-y-4">
      {/* رقم كتاب منح الإجازة */}
      <div className="flex items-center gap-4">
        <label className="w-56 text-right text-sm font-medium text-gray-700">
          رقم كتاب منح الإجازة:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* تاريخ كتاب منح الإجازة */}
      <div className="flex items-center gap-4">
        <label className="w-56 text-right text-sm font-medium text-gray-700">
          تاريخ كتاب منح الإجازة:
        </label>
        <input
          type="date"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* آخر تجديد */}
      <div className="flex items-center gap-4">
        <label className="w-56 text-right text-sm font-medium text-gray-700">
          آخر تجديد:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* التجديد */}
      <div className="flex items-center gap-4">
        <label className="w-56 text-right text-sm font-medium text-gray-700">
          التجديد:
        </label>
        <select className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none">
          <option>نعم</option>
          <option>لا</option>
        </select>
      </div>

      {/* رقم الإجازة الاستثمارية */}
      <div className="flex items-center gap-4">
        <label className="w-56 text-right text-sm font-medium text-gray-700">
          رقم الإجازة الاستثمارية:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* ملاحظة */}
      <div className="flex items-center gap-4">
        <label className="w-56 text-right text-sm font-medium text-gray-700">
          ملاحظة:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>
    </div>
  );
}
