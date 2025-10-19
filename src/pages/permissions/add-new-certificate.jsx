import Image from "next/image";
import QR from "public/qr.png";
export default function AddMural() {
  return (
    <div dir="rtl" className="p-10 bg-gray-50 min-h-screen">
      <div className="bg-white shadow rounded-lg p-10 relative">
        <div className="flex justify-between items-start mb-6">
          <div className="flex-col justify-center text-center">
            <p className="text-sm font-medium">جمهورية العراق</p>
            <p className="text-sm font-medium">وزارة الصحة</p>
            <p className="text-sm font-medium">مكتب الوزير</p>
            <p className="text-sm font-medium">قسم القطاع الصحي الخاص</p>
          </div>
          <div className="flex-col justify-center text-center">
            <p className="text-sm font-medium">كوماري عيراق</p>
            <p className="text-sm font-medium">وه زارتي ته ندروسى</p>
            <p className="text-sm font-medium">نووسيكه ى وةزير</p>
            <p className="text-sm font-medium">بة شي كة رتي ندورسى نايبة ت</p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2 mt-1">
            <p className="text-sm font-medium">العدد :</p>
            <input
              type="text"
              className="w-40 border rounded-lg py-1 px-2 text-sm focus:ring-2 focus:ring-ministry-green focus:outline-none"
            />
          </div>
          <div className="flex">
            <p className="text-sm font-medium mt-2">التاريخ :</p>
            <input
              type="date"
              className="w-40 border rounded-lg py-1 px-2 text-sm focus:ring-2 focus:ring-ministry-green focus:outline-none"
            />
          </div>
        </div>

        {/* QR Code */}
        <div className="absolute left-18 top-30">
          <div className="w-28 h-28 bg-gray-200 flex items-center justify-center">
            <span className="text-xs text-gray-500">
              <Image src={QR} />
            </span>
          </div>
        </div>

        {/* العنوان */}
        <h2 className="text-xl font-bold text-center mb-6">شهادة جدارية</h2>

        {/* الاسم */}
        <div className="flex items-center gap-4 mb-4">
          <label className="w-16 text-right text-sm font-medium">الاسم:</label>
          <input
            type="text"
            className="flex-1 border rounded-lg py-2 px-3 focus:ring-2 focus:ring-ministry-green focus:outline-none"
          />
        </div>

        {/* النص */}
        <div className="flex flex-col items-center justify-center mb-8">
          <label className="text-right text-m font-semibold">
            م/ منح إجازة
            <br />
            رخصة عمل مؤقتة
          </label>
          <textarea
            rows="4"
            placeholder="تحية طيبة…..
حصلت الموافقة النهائية على منح اجازة ل() بموجب كتاب وزارة الصحة /  الكائن في محافظة
استناد الى احكام قانون"
            className="w-full border rounded-lg p-3 text-sm focus:ring-2 focus:ring-ministry-green focus:outline-none"
          />
        </div>

        {/* التواقيع */}
        <div className="flex flex-row-reverse justify-between mt-12 text-sm">
          <div className="border p-3 rounded-lg w-64 text-center">
            <p>الدكتور</p>
            <p>هاني موسى العقابي</p>
            <p>الوكيل الفني لوزارة الصحة وكالة</p>
          </div>
          <div className="border p-3 rounded-lg w-64 text-center">
            <p>الصيدلاني</p>
            <p>عباس بدر الفرطوسي</p>
            <p>مدير قسم القطاع الصحي الخاص</p>
          </div>
        </div>

        <div className="w-full flex justify-center mt-12">
          <button className="w-full px-10 py-3 rounded-lg bg-ministry-green text-white font-medium hover:bg-ministry-green/90 transition">
            حفظ الجدارية
          </button>
        </div>
      </div>
    </div>
  );
}
