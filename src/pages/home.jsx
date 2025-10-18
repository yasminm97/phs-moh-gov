import Layout from "../components/Layout";
import HeaderBar from "../components/HeaderBar";
import StatsCards from "../components/StatsCards";
import ChartsSection from "../components/ChartsSection";
import ImportantList from "../components/ImportantList";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-8">
        <StatsCards />
        <ChartsSection />
        <ImportantList />
      </div>
    </Layout>
  );
}
