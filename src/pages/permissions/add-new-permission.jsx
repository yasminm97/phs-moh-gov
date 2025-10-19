import Layout from "@/components/Layout";
import { useState } from "react";
import Step1Form from "@/components/letters/Step1Form";
import Step2Form from "@/components/letters/Step2Form";

export default function AddPermission() {
  const [step, setStep] = useState(1);

  return (
    <Layout>
      <div dir="rtl" className="p-6 bg-gray-50 flex-1 overflow-y-auto">
        {/* Stepper */}
        <div className="flex items-center justify-center gap-12 mb-10">
          {[1, 2].map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step === s
                    ? "bg-ministry-green text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {s}
              </div>
              <span className="mt-2 text-sm">
                {s === 1 ? "معلومات الكتاب" : "معلومات أخرى"}
              </span>
            </div>
          ))}
        </div>

        {/* Form Container */}
        <div className="w-full mx-auto bg-white rounded-lg shadow border p-8 space-y-4">
          {step === 1 && <Step1Form />}
          {step === 2 && <Step2Form />}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="w-1/3 px-6 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
              >
                رجوع
              </button>
            )}
            {step < 2 ? (
              <button
                onClick={() => setStep(step + 1)}
                className="w-1/3 px-6 py-2 rounded-lg bg-ministry-green text-white hover:bg-ministry-green/90 transition"
              >
                التالي
              </button>
            ) : (
              <button
                type="submit"
                className="w-1/3 px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                حفظ
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
