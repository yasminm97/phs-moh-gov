import { useRouter } from "next/router";
import Footer from "./Footer";
import Image from "next/image";
import Logo from "../../public/logo/logo.png";

import {
  Home,
  IdCard,
  Inbox,
  Send,
  Calendar,
  User,
  PlusSquare,
  FilePlus,
  FileText,
  StickyNote,
  CalendarPlus,
  FolderPlus,
  GitBranchPlus,
  Folders,
} from "lucide-react";

const menuItems = [
  { name: "الصفحة الرئيسية", path: "/home", icon: <Home size={20} /> },
  {
    name: "البطاقات",
    path: "/cards",
    icon: <IdCard size={20} />,
    branch: true,
    children: [
      {
        name: "اضافة بطاقة",
        path: "/cards/add-new-card",
        icon: <PlusSquare size={18} />,
      },
    ],
  },
  {
    name: "الكتب الواردة",
    path: "/incoming",
    icon: <Inbox size={20} />,
    branch: true,
    children: [
      {
        name: "اضافة كتاب",
        path: "/incoming/add-new-letter",
        icon: <FilePlus size={18} />,
      },
    ],
  },
  {
    name: "الكتب الصادرة",
    path: "/outgoing",
    icon: <Send size={20} />,
    branch: true,
    children: [
      {
        name: "اضافة كتاب",
        path: "/outgoing/add-new-letter",
        icon: <FilePlus size={18} />,
      },
    ],
  },
  {
    name: "التقارير",
    path: "/reports",
    icon: <FileText size={20} />,
  },
  {
    name: "الإجازات",
    path: "/permissions",
    icon: <Calendar size={20} />,
    branch: true,
    children: [
      {
        name: "اضافة اجازة",
        path: "/permissions/add-new-permission",
        icon: <CalendarPlus size={18} />,
      },
    ],
  },
  {
    name: "التصنيفات",
    path: "/",
    icon: <Folders size={20} />,
    branch: true,
    children: [
      {
        name: "اضافة تصنيف",
        path: "/branches/add-new-branch",
        icon: <FolderPlus size={18} />,
      },
      {
        name: "اضافة تصنيف فرعي",
        path: "/branches/add-new-sub-branch",
        icon: <GitBranchPlus size={18} />,
      },
    ],
  },

  {
    name: "تسجيل الخروج",
    path: "/signout",
    icon: <User size={20} />,
  },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <aside
      dir="rtl"
      className="w-64 h-screen bg-ministry-green text-white flex flex-col"
    >
      <div className="p-6 border-b border-green-800 flex justify-center">
        <Image
          src={Logo}
          alt="Logo"
          className="object-contain rounded-full"
          width={100}
          height={100}
        />
      </div>

      <nav className="flex-1 overflow-y-auto p-4 pt-8 space-y-2">
        {menuItems.map((item, idx) => (
          <div key={idx}>
            <button
              onClick={() => router.push(item.path)}
              className={`w-full flex flex-row-reverse items-center gap-3 px-4 py-2 rounded-md text-right transition ${
                router.pathname === item.path
                  ? "bg-white text-ministry-green font-semibold"
                  : "hover:bg-green-700"
              }`}
            >
              {item.icon}
              <span className="flex-1 text-right">{item.name}</span>
            </button>

            {item.branch && (
              <div className="relative mt-1 space-y-1 pr-6">
                <div className="absolute top-0 right-2 h-full w-px bg-white/30"></div>

                {item.children.map((child, cIdx) => (
                  <button
                    key={cIdx}
                    onClick={() => router.push(child.path)}
                    className={`relative w-full flex flex-row-reverse items-center gap-3 px-4 py-2 rounded-md text-sm transition ${
                      router.pathname === child.path
                        ? "bg-white text-ministry-green font-semibold"
                        : "hover:bg-green-700"
                    }`}
                  >
                    {child.icon}
                    <span className="flex-1 text-right">{child.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <Footer />
    </aside>
  );
}
