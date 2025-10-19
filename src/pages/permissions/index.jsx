import CardHeader from "@/components/CardHeader";
import CardTable from "@/components/CardTable";
import Layout from "@/components/Layout";
import SearchBar from "@/components/SearchBar";
import permissions from "@/data/permissions.json";

export default function index() {
  const permissionsColumns = [
    { key: "number", label: "رقم الكتاب" },
    { key: "subject", label: "الموضوع" },
    { key: "status", label: "الحالة" },
  ];
  return (
    <Layout>
      <div dir="rtl" className="p-6 bg-gray-50 min-h-screen">
        <CardHeader
          type="الإجازات"
          count={permissions.length}
          path="/permissions/add"
        />
        <div dir="ltr" className="flex justify-between">
          <SearchBar />
        </div>
        <CardTable rows={permissions} columns={permissionsColumns} />
      </div>
    </Layout>
  );
}
