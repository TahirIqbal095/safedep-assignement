export interface PackageInsightResponse {
  packageVersion?: {
    version?: string;
    package?: {
      name?: string;
      ecosystem?: string;
    };
  };
  insight?: {
    vulnerabilities?: Array<{
      id?: { value?: string };
      summary?: string;
      severities?: Array<{ risk?: string; score?: string }>;
      publishedAt?: string;
      modifiedAt?: string;
    }>;
    projectInsights?: Array<{
      scorecard?: {
        score?: number;
      };
      licenses?: {
        licenses?: Array<{ licenseId?: string }>;
      };
      availableVersions?: Array<{
        version?: string;
        publishedAt?: string;
      }>;
    }>;
  };
}

export interface MalwareAnalysisResponse {
  report?: {
    analyzedAt?: string;
    target?: {
      origin?: string;
      sha256?: string;
    };
  };
}

export interface PackageParams {
  name: string;
  version: string;
  ecosystem: string;
}

export interface LicenseData {
  id: string;
  name: string;
  url: string;
}

export type ContentItem = {
  type: "text" | "note";
  value: string;
};

export type OverviewSection = {
  title: string;
  borderColor?: string;
  content: ContentItem[];
};

export type StatCardConfig = {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
};

export interface VersionData {
  version: string;
  isLatest?: boolean;
  publishedAt: string;
}

export type RiskLevel = "Low" | "Medium" | "High" | "Critical" | "Unspecified";

export interface VulnerabilityData {
  id: string;
  summary: string;
  risk: RiskLevel;
  published: string;
  modified: string;
}
