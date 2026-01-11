import { Award, BookOpenText, Bug, CircleAlert, Earth } from "lucide-react";
import { format } from "date-fns";
import {
  PackageInsightResponse,
  MalwareAnalysisResponse,
  VulnerabilityData,
  RiskLevel,
  VersionData,
  LicenseData,
  StatCardConfig,
} from "@/types";

export function sanitizeVulnerabilities(
  data: PackageInsightResponse
): VulnerabilityData[] {
  const vulns = data.insight?.vulnerabilities || [];

  return vulns.map((vuln) => {
    let riskLevel: RiskLevel = "Unspecified";
    const apiRisk = vuln.severities?.[0]?.risk;

    if (apiRisk === "RISK_CRITICAL") riskLevel = "Critical";
    else if (apiRisk === "RISK_HIGH") riskLevel = "High";
    else if (apiRisk === "RISK_MEDIUM") riskLevel = "Medium";
    else if (apiRisk === "RISK_LOW") riskLevel = "Low";

    return {
      id: vuln.id?.value || "Unknown ID",
      summary: vuln.summary || "No summary available",
      risk: riskLevel,
      published: vuln.publishedAt
        ? format(new Date(vuln.publishedAt), "MM/dd/yyyy")
        : "N/A",
      modified: vuln.modifiedAt
        ? format(new Date(vuln.modifiedAt), "MM/dd/yyyy")
        : "N/A",
    };
  });
}

export function sanitizeVersions(data: PackageInsightResponse): VersionData[] {
  const versions = data.insight?.projectInsights?.[0]?.availableVersions || [];

  const sortedVersions = [...versions].sort((a, b) => {
    return (
      new Date(b.publishedAt || "").getTime() -
      new Date(a.publishedAt || "").getTime()
    );
  });

  return sortedVersions.map((v) => ({
    version: v.version || "Unknown",
    publishedAt: v.publishedAt
      ? format(new Date(v.publishedAt), "MM/dd/yyyy")
      : "N/A",
  }));
}

export function sanitizeLicenses(data: PackageInsightResponse): LicenseData[] {
  const licenses = data.insight?.projectInsights?.[0]?.licenses?.licenses || [];

  return licenses.map((l) => ({
    id: l.licenseId || "Unknown",
    name: l.licenseId || "Unknown", // API doesn't have license id
    url: "#", // no url provided
  }));
}

export function generateStatCards(
  data: PackageInsightResponse
): StatCardConfig[] {
  const insight = data.insight;
  const projectInsight = insight?.projectInsights?.[0];

  const version = data.packageVersion?.version || "N/A";
  const vulnCount = insight?.vulnerabilities?.length || 0;
  const score = projectInsight?.scorecard?.score
    ? `${projectInsight.scorecard.score.toFixed(1)}/10`
    : "N/A";
  const license =
    projectInsight?.licenses?.licenses?.[0]?.licenseId || "Unknown";
  const ecosystemRaw = data.packageVersion?.package?.ecosystem || "Unknown";
  const ecosystem = ecosystemRaw.replace("ECOSYSTEM_", "");

  return [
    { label: "Version", value: version, icon: <CircleAlert size={14} /> },
    {
      label: "Vulnerabilities",
      value: vulnCount.toString(),
      icon: <Bug size={14} />,
      danger: vulnCount > 0,
    },
    {
      label: "OpenSSF Scorecard",
      value: score,
      primary: true,
      icon: <BookOpenText size={14} />,
    },
    { label: "License", value: license, icon: <Award size={14} /> },
    { label: "Ecosystem", value: ecosystem, icon: <Earth size={14} /> },
  ];
}

export function getPackageSummaryData(
  insightData: PackageInsightResponse,
  malwareData?: MalwareAnalysisResponse
) {
  const analyzedAt = malwareData?.report?.analyzedAt
    ? format(new Date(malwareData.report.analyzedAt), "dd MMM yyyy, HH:mm")
    : "N/A";

  return {
    packageName: insightData.packageVersion?.package?.name || "Unknown",
    version: insightData.packageVersion?.version || "Unknown",
    analyzedAt: analyzedAt,
    source: malwareData?.report?.target?.origin || "N/A",
    sha256: malwareData?.report?.target?.sha256 || "N/A",
  };
}
