export default function Step4InstitutionForm() {
  return (
    <div className="space-y-4">
      {/* نوع المؤسسة */}
      <div className="flex items-center gap-4">
        <label className="w-52 text-right text-sm font-medium text-gray-700">
          نوع المؤسسة:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* اسم المدير الفني */}
      <div className="flex items-center gap-4">
        <label className="w-52 text-right text-sm font-medium text-gray-700">
          اسم المدير الفني:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* مساحة المؤسسة */}
      <div className="flex items-center gap-4">
        <label className="w-52 text-right text-sm font-medium text-gray-700">
          مساحة المؤسسة:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* عدد الأقسام والوحدات */}
      <div className="flex items-center gap-4">
        <label className="w-52 text-right text-sm font-medium text-gray-700">
          عدد الأقسام والوحدات التي فيها:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* اسم المؤسسة الصحية الخاصة */}
      <div className="flex items-center gap-4">
        <label className="w-52 text-right text-sm font-medium text-gray-700">
          اسم المؤسسة الصحية الخاصة:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* عنوان المؤسسة */}
      <div className="flex items-center gap-4">
        <label className="w-52 text-right text-sm font-medium text-gray-700">
          عنوان المؤسسة:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* اسم المدير الإداري */}
      <div className="flex items-center gap-4">
        <label className="w-52 text-right text-sm font-medium text-gray-700">
          اسم المدير الإداري:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* عدد السعة السريرية */}
      <div className="flex items-center gap-4">
        <label className="w-52 text-right text-sm font-medium text-gray-700">
          عدد السعة السريرية:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>
    </div>
  );
}
