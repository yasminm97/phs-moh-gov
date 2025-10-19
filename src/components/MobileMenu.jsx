import { useRouter } from "next/router";
import { Home, IdCard, Inbox, Send, Calendar, User } from "lucide-react";

const mobileMenuItems = [
  { name: "الرئيسية", path: "/home", icon: <Home size={22} /> },
  { name: "البطاقات", path: "/cards", icon: <IdCard size={22} /> },
  { name: "الواردة", path: "/incoming", icon: <Inbox size={22} /> },
  { name: "الصادرة", path: "/outgoing", icon: <Send size={22} /> },
  { name: "الإجازات", path: "/permissions", icon: <Calendar size={22} /> },
  { name: "خروج", path: "/signIn", icon: <User size={22} /> },
];

export default function MobileMenu() {
  const router = useRouter();

  return (
    <div
      dir="rtl"
      className="fixed bottom-0 right-0 left-0 bg-ministry-green text-white border-t border-green-700 flex justify-around items-center py-2 md:hidden z-50"
    >
      {mobileMenuItems.map((item, idx) => (
        <button
          key={idx}
          onClick={() => router.push(item.path)}
          className={`flex flex-col items-center text-xs ${
            router.pathname === item.path
              ? "text-yellow-300 font-semibold"
              : "text-white"
          }`}
        >
          {item.icon}
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
}
