export default function Step2Form() {
  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-2">جهة الكتاب:</label>
        <input
          type="text"
          placeholder="أدخل الجهة"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">موضوع الكتاب:</label>
        <input
          type="text"
          placeholder="أدخل الموضوع"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">رقم الوارد:</label>
        <input
          type="text"
          placeholder="أدخل الرقم"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">تاريخ الوارد:</label>
        <input
          type="date"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">الإحالة:</label>
        <div className="flex gap-6 mt-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="referral" value="مدير القسم" />
            مدير القسم
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="referral" value="معاون مدير القسم" />
            معاون مدير القسم
          </label>
        </div>
      </div>
    </>
  );
}
