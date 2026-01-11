import { InsightErrorDialog } from "@/components/insight-error-dialog";
import { getPackageInsight, getMalwareAnalysis } from "@/actions/safedep";
import PackageSummary from "@/components/package-summary";
import Header from "@/components/header";
import StatCard from "@/components/stat-card";
import PackageInsightsPanel from "@/components/package-insights-panel";
import {
  generateStatCards,
  getPackageSummaryData,
  sanitizeLicenses,
  sanitizeVersions,
  sanitizeVulnerabilities,
} from "@/utils/sanitize-data";
import { PackageInsightResponse, MalwareAnalysisResponse } from "@/types";

interface Props {
  params: Promise<{ ecosystem: string; name: string; version: string }>;
}

async function OpenSourcePackageDetails({ params }: Props) {
  const { ecosystem, name, version } = await params;
  let insightData: PackageInsightResponse | undefined;
  let malwareData: MalwareAnalysisResponse | undefined;

  try {
    const [insightRes, malwareRes] = await Promise.allSettled([
      getPackageInsight({ ecosystem, name, version }),
      getMalwareAnalysis({ ecosystem, name, version }),
    ]);

    if (insightRes.status === "fulfilled") {
      insightData = insightRes.value as PackageInsightResponse;
    } else {
      throw insightRes.reason;
    }

    if (malwareRes.status === "fulfilled") {
      malwareData = malwareRes.value as MalwareAnalysisResponse;
    }
  } catch (error) {
    console.error(error);
    return (
      <InsightErrorDialog
        message={
          error instanceof Error
            ? error.message
            : "Failed to load package details"
        }
      />
    );
  }

  const summaryData = getPackageSummaryData(insightData, malwareData);
  const statCards = generateStatCards(insightData);
  const vulnerabilities = sanitizeVulnerabilities(insightData);
  const versionsData = sanitizeVersions(insightData);
  const licenses = sanitizeLicenses(insightData);

  return (
    <div className="p-4">
      <Header />
      <main className="shadow-custom mt-8 overflow-hidden rounded">
        <div className="border-border space-y-4 border-b bg-[#F8FAFC] p-5">
          <PackageSummary {...summaryData} />
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {statCards.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </section>
        </div>
        <PackageInsightsPanel
          vulnerabilities={vulnerabilities}
          versions={versionsData}
          licenses={licenses}
        />
      </main>
    </div>
  );
}

export default OpenSourcePackageDetails;
