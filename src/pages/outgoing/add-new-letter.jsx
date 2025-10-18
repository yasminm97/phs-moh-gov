import Layout from "@/components/Layout";
import { useState } from "react";

export default function AddCard() {
  const [step, setStep] = useState(1);

  return (
    <Layout>
      <div dir="rtl" className="p-6 bg-gray-50 flex-1 overflow-y-auto">
        <div className="flex items-center justify-center gap-12 mb-10">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step === 1
                  ? "bg-ministry-green text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              1
            </div>
            <span className="mt-2 text-sm">معلومات البطاقة</span>
          </div>
          <div className="w-16 h-0.5 bg-gray-300"></div>
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                step === 2
                  ? "bg-ministry-green text-white"
                  : "bg-gray-200 text-gray-600"
              }`}
            >
              2
            </div>
            <span className="mt-2 text-sm">معلومات إضافية</span>
          </div>
        </div>

        <div className="w-full mx-auto bg-white rounded-lg shadow border border-gray-200 p-8 space-y-2">
          <div>
            <label className="block text-sm font-medium mb-2">الكتاب:</label>
            <input
              type="file"
              className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer focus:outline-none focus:ring-2 focus:ring-ministry-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              تسلسل البطاقة:
            </label>
            <input
              type="text"
              placeholder="أدخل التسلسل"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              نوع الكتاب:
            </label>
            <input
              type="text"
              placeholder="أدخل النوع"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              رقم الكتاب:
            </label>
            <input
              type="text"
              placeholder="أدخل الرقم"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              تاريخ الكتاب:
            </label>
            <input
              type="date"
              className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-ministry-green"
            />
          </div>

          <div className="flex justify-between">
            <button
              onClick={() => setStep(step - 1)}
              className="w-1/3 px-6 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
            >
              رجوع
            </button>
            <button
              onClick={() => setStep(step + 1)}
              className="w-1/3 px-6 py-2 rounded-lg bg-ministry-green text-white hover:bg-ministry-green/90 transition"
            >
              التالي
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
