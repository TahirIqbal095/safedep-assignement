import { InsightErrorDialog } from "@/components/package-details/insight-error-dialog";
import { getPackageInsight, getMalwareAnalysis } from "@/actions/safedep";
import PackageSummary from "@/components/package-details/package-summary";
import Header from "@/components/package-details/header";
import PackageInsightsPanel from "@/components/package-insights/package-insights-panel";
import {
  generateStatCards,
  getPackageSummaryData,
  sanitizeLicenses,
  sanitizeVersions,
  sanitizeVulnerabilities,
} from "@/utils/sanitize-data";
import { PackageInsightResponse, MalwareAnalysisResponse } from "@/types";
import { Metadata } from "next";
import StatCardView from "@/components/package-details/stat-card-view";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { ecosystem, package: pkgSlug } = await params;
  const version = pkgSlug[pkgSlug.length - 1];
  const name = pkgSlug.slice(0, -1).join("/");

  return {
    title: `${name} v${version} - ${ecosystem} Package Insights | SafeDep`,
    description: `Detailed security insights, vulnerability analysis, and malware detection for ${name} version ${version} in the ${ecosystem} ecosystem.`,
    openGraph: {
      title: `${name} v${version} - Security Insights`,
      description: `View vulnerabilities, licenses, and malware analysis for ${name} v${version}.`,
      type: "website",
    },
  };
}

interface Props {
  params: Promise<{ ecosystem: string; package: string[] }>;
}

async function OpenSourcePackageDetails({ params }: Props) {
  const { ecosystem, package: pkgSlug } = await params;
  const version = pkgSlug[pkgSlug.length - 1];
  const name = pkgSlug.slice(0, -1).join("/");

  console.log(name, version);

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
          <StatCardView statCards={statCards} />
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
