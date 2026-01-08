import PackageSummary from "@/components/package-summary";
import Header from "@/components/header";
import { statCardConfig } from "@/config/stat-card";
import StatCard from "@/components/stat-card";
import PackageInsightsPanel from "@/components/package-insights-panel";

export default async function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-7xl py-8">
      <Header />
      <main className="shadow-custom mt-8 overflow-hidden rounded">
        <div className="space-y-4 bg-[#f8fbff] p-5">
          <PackageSummary />
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {statCardConfig.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </section>
        </div>
        <PackageInsightsPanel />
      </main>
    </div>
  );
}
