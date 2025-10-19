import { useState } from "react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import Step1PersonalForm from "@/components/AddCard/Step1PersonalForm.jsx";
import Step2PersonalForm from "@/components/AddCard/Step2PersonalForm.jsx";
import Step3DoctorForm from "@/components/AddCard/Step3DoctorForm";
import Step4InstitutionForm from "@/components/AddCard/Step4InstitutionForm";
import Step5LicenseForm from "@/components/AddCard/Step5LicenseForm";

const steps = [
  "معلومات شخصية",
  "معلومات شخصية2",
  "معلومات الطبيب",
  "معلومات المؤسسة",
  "معلومات كتاب الإجازة",
];

export default function AddNewCard() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  return (
    <Layout>
      <div dir="rtl" className="p-6 bg-gray-50 min-h-screen">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold text-ministry-charcoal mb-6 text-center">
            إضافة بطاقة جديدة
          </h1>

          {/* Stepper */}
          <div className="flex items-center justify-center mb-8">
            {steps.map((label, idx) => {
              const current = idx + 1;
              return (
                <div key={idx} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-medium ${
                      step === current
                        ? "bg-ministry-green text-white border-ministry-green"
                        : "bg-white text-gray-500 border-gray-300"
                    }`}
                  >
                    {current}
                  </div>
                  <span className="mx-2 text-sm">{label}</span>
                  {idx < steps.length - 1 && (
                    <div className="w-8 h-[2px] bg-gray-300"></div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Form Section */}
          {step === 1 && <Step1PersonalForm />}
          {step === 2 && <Step2PersonalForm />}
          {step === 3 && <Step3DoctorForm />}
          {step === 4 && <Step4InstitutionForm />}
          {step === 5 && <Step5LicenseForm />}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              disabled={step === 1}
              onClick={() => setStep(step - 1)}
              className="w-1/3 px-6 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition disabled:opacity-50"
            >
              رجوع
            </button>
            {step < 5 ? (
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
