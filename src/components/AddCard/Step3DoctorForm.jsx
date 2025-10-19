export default function Step3DoctorForm() {
  return (
    <div className="space-y-4">
      {/* اسم الطبيب المشرف */}
      <div className="flex items-center gap-4">
        <label className="w-48 text-right text-sm font-medium text-gray-700">
          اسم الطبيب المشرف:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* اختصاص الطبيب */}
      <div className="flex items-center gap-4">
        <label className="w-48 text-right text-sm font-medium text-gray-700">
          اختصاص الطبيب:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* محل اشتغاله */}
      <div className="flex items-center gap-4">
        <label className="w-48 text-right text-sm font-medium text-gray-700">
          محل اشتغاله:
        </label>
        <input
          type="text"
          className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
        />
      </div>

      {/* يوجد لديه عيادة */}
      <div className="flex items-center gap-4">
        <label className="w-48 text-right text-sm font-medium text-gray-700">
          يوجد لديه عيادة:
        </label>
        <select className="flex-1 rounded-lg border border-gray-300 py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none">
          <option>لا</option>
          <option>نعم</option>
        </select>
      </div>

      {/* هوية نقابة مجددة */}
      <div className="flex items-center gap-4">
        <label className="w-48 text-right text-sm font-medium text-gray-700">
          هوية نقابة مجددة:
        </label>
        <input
          type="file"
          className="flex-1 text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-ministry-green"
        />
      </div>
    </div>
  );
}
