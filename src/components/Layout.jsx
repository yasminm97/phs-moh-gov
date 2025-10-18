// Layout.jsx
import Sidebar from "./Sidebar";
import MobileMenu from "./MobileMenu";
import HeaderBar from "./HeaderBar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-row-reverse h-screen">
      <div className="hidden md:block">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col h-screen bg-gray-50">
        <header className="bg-white p-4 sticky top-0 z-10">
          <HeaderBar />
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>

      <MobileMenu />
    </div>
  );
}
