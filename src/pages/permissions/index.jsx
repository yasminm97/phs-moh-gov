import CardHeader from "@/components/CardHeader";
import CardTable from "@/components/CardTable";
import Layout from "@/components/Layout";
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
        <CardTable rows={permissions} columns={permissionsColumns} />
      </div>
    </Layout>
  );
}
