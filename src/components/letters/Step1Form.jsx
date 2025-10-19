export default function Step1Form() {
  return (
    <>
      <div>
        <label className="block text-sm font-medium mb-2">الكتاب:</label>
        <input
          type="file"
          className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-ministry-green"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">تسلسل البطاقة:</label>
        <input
          type="text"
          placeholder="أدخل التسلسل"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">نوع الكتاب:</label>
        <select className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green">
          <option>نوع الكتاب</option>
          <option>كتاب</option>
          <option>مذكرة</option>
          <option>طلب</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">رقم الكتاب:</label>
        <input
          type="text"
          placeholder="أدخل الرقم"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">تاريخ الكتاب:</label>
        <input
          type="date"
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
        />
      </div>
    </>
  );
}
