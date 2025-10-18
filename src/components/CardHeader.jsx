import { Plus } from "lucide-react";
import { useRouter } from "next/router";

export default function CardHeader({ type, count, path }) {
  const router = useRouter();

  return (
    <div className="mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-ministry-charcoal">
          آخر {type}
        </h1>
        <p className="text-gray-600">
          عدد {type} الكلي: {count}
        </p>
      </div>

      <button
        onClick={() => router.push(path)}
        className="flex items-center gap-2 px-6 py-2 rounded-lg bg-ministry-green text-white hover:bg-ministry-green/90 transition"
      >
        <Plus size={22} /> {type === "البطاقات" ? "اضافة بطاقة" : "اضافة اجازة"}
      </button>
    </div>
  );
}
