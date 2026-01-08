import PackageSummary from "@/components/package-summary";
import Header from "@/components/header";
import { statCardConfig } from "@/config/stat-card";
import StatCard from "@/components/stat-card";
export default async function Home() {
  return (
    <main className="border-border mx-auto min-h-screen max-w-7xl border py-8">
      <Header />
      <PackageSummary />
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {statCardConfig.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>
    </main>
  );
}
