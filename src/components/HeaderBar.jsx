import Image from "next/image";
import Logo from "../../public/logo/logo.png";
// import Profile from "../../public/profile.png";
import { UserCircle } from "lucide-react";

export default function HeaderBar() {
  const user = {
    name: "د. عباس بدر الفرطوسي",
    role: "مدير النظام",
    // image: Profile,
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-between gap-4"
      dir="rtl"
    >
      <div className="flex flex-row items-center gap-3">
        <Image
          src={Logo}
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="text-right">
          <h1 className="text-xl font-bold text-ministry-charcoal">
            وزارة الصحة - قسم القطاع الصحي الخاص
          </h1>
          <p className="text-xs text-gray-500">Iraqi Ministry of Health</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <UserCircle size={40} className="text-ministry-green" />
        <div className="text-right">
          <p className="font-semibold text-ministry-charcoal">{user.name}</p>
          <p className="text-xs text-gray-500">{user.role}</p>
        </div>
      </div>
    </div>
  );
}
