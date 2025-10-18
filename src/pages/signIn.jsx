// pages/signin.jsx
import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "../../public/logo/logo.png";
import Image from "next/image";
import Footer from "../components/Footer";

export default function SignIn() {
  const router = useRouter();
  const [username, setUsername] = useState("System");
  const [password, setPassword] = useState("System");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

  const validate = () => {
    const e = {};
    if (!username?.trim()) e.username = "اسم المستخدم مطلوب";
    if (!password) e.password = "كلمة المرور مطلوبة";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setErrors({});

    // Local verification
    if (username === "System" && password === "System") {
      localStorage.setItem("userToken", "demo-token");
      localStorage.setItem("userId", "1");
      localStorage.setItem("userRole", "admin");
      console.log("Good");
      if (router.pathname !== "/home") {
        router.push("/home");
      }
    } else {
      setErrors({ form: "اسم المستخدم أو كلمة المرور غير صحيحة" });
    }

    setLoading(false);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-ministry-soft to-white"
      dir="rtl"
      lang="ar"
    >
      <div className="max-w-4xl w-full bg-white shadow-card border border-ministry-soft rounded-xl grid grid-cols-1 md:grid-cols-2">
        <div className="flex items-center justify-center p-8 border-b md:border-b-0 md:border-l border-ministry-soft">
          <Image
            src={Logo}
            alt="Logo"
            className="object-contain"
            width={180}
            height={180}
          />
        </div>

        <div className="flex flex-col justify-center p-8">
          <div className="mb-6 text-right">
            <h2 className="text-2xl font-semibold text-ministry-charcoal">
              تسجيل الدخول
            </h2>
          </div>

          {errors.form && (
            <div className="mb-4 text-sm text-red-600 bg-red-50 p-3 rounded-md border border-red-200">
              {errors.form}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-right text-sm font-medium text-gray-700">
                اسم المستخدم
              </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={`mt-2 block w-full rounded-xl border ${
                  errors.username ? "border-red-300" : "border-gray-200"
                } p-3 focus:outline-none focus:ring-2 focus:ring-ministry-green`}
                placeholder="اسم المستخدم"
                dir="rtl"
                autoComplete="username"
              />
              {errors.username && (
                <p className="mt-1 text-xs text-red-600 text-right">
                  {errors.username}
                </p>
              )}
            </div>

            <div>
              <label className="block text-right text-sm font-medium text-gray-700">
                كلمة المرور
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`mt-2 block w-full rounded-xl border ${
                  errors.password ? "border-red-300" : "border-gray-200"
                } p-3 focus:outline-none focus:ring-2 focus:ring-ministry-green`}
                placeholder="كلمة المرور"
                autoComplete="current-password"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-600 text-right">
                  {errors.password}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-ministry-green text-white font-medium shadow hover:bg-ministry-green/90 transition"
              disabled={loading}
            >
              {loading ? "جاري الدخول..." : "تسجيل الدخول"}
            </button>
          </form>

          <Footer />
        </div>
      </div>
    </div>
  );
}
