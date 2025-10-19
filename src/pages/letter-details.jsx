import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function LetterDetails({ letter }) {
  const router = useRouter();

  const data = letter || {
    id: 24,
    type: "مذكرة",
    number: "23",
    date: "2025-10-12",
    source: "العراق",
    incomingNumber: "",
    incomingDate: "",
    note: "",
    attachments: "",
    fileUrl: "/sample.docx",
  };

  return (
    <Layout>
      <div dir="rtl" className="p-8 bg-gray-50 min-h-screen">
        <div className="bg-white shadow rounded-lg p-8 flex gap-8">
          {/* ملف / مرفق */}
          <div className="flex-1 flex items-center justify-center border rounded-lg bg-gray-50">
            {data.fileUrl ? (
              <a
                href={data.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Download DOCX File
              </a>
            ) : (
              <p className="text-gray-400">لا يوجد مرفق</p>
            )}
          </div>

          {/* تفاصيل الكتاب */}
          <div className="w-1/2 space-y-3 text-sm">
            <p>
              <span className="font-medium">رقم البطاقة:</span> {data.id}
            </p>
            <p>
              <span className="font-medium">نوع الكتاب:</span> {data.type}
            </p>
            <p>
              <span className="font-medium">رقم الكتاب:</span> {data.number}
            </p>
            <p>
              <span className="font-medium">تاريخ الكتاب:</span> {data.date}
            </p>
            <p>
              <span className="font-medium">جهة الكتاب:</span> {data.source}
            </p>
            <p>
              <span className="font-medium">رقم الوارد:</span>{" "}
              {data.incomingNumber || "-"}
            </p>
            <p>
              <span className="font-medium">تاريخ الوارد:</span>{" "}
              {data.incomingDate || "-"}
            </p>
            <p>
              <span className="font-medium">ملاحظة:</span> {data.note || "-"}
            </p>
            <p>
              <span className="font-medium">الملحقات:</span>{" "}
              {data.attachments || "-"}
            </p>
          </div>
        </div>

        {/* الأزرار */}
        <div className="flex justify-between mt-8">
          <button
            onClick={() => router.back()}
            className="px-6 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition"
          >
            رجوع
          </button>
          <div className="flex gap-4">
            <button
              onClick={() => router.push(`/letters/${data.id}/edit`)}
              className="px-6 py-2 rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition"
            >
              تعديل
            </button>
            <button
              onClick={() => alert("إضافة ملحق")}
              className="px-6 py-2 rounded-lg bg-ministry-green text-white hover:bg-ministry-green/90 transition"
            >
              إضافة ملحق
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
