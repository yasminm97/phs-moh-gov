import CardHeader from "@/components/CardHeader";
import CardTable from "@/components/CardTable";
import Layout from "@/components/Layout";
import cards from "@/data/cards.json";

export default function CardList() {
  const cardsColumns = [
    { key: "sequence", label: "التسلسل" },
    { key: "investorName", label: "اسم المستثمر" },
    { key: "institutionName", label: "اسم المؤسسة" },
    { key: "renewal", label: "التجديد" },
  ];
  return (
    <Layout>
      <div dir="rtl" className="p-6 bg-gray-50 min-h-screen">
        <CardHeader type="البطاقات" count={cards.length} path="/cards/add" />
        <CardTable rows={cards} columns={cardsColumns} />
      </div>
    </Layout>
  );
}
