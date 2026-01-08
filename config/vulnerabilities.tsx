export type RiskLevel = "Low" | "Medium" | "High" | "Critical" | "Unspecified";

export interface VulnerabilityData {
  id: string;
  summary: string;
  risk: RiskLevel;
  published: string;
  modified: string;
}

export const vulnerabilitiesData: VulnerabilityData[] = [
  {
    id: "GHSA-9hjg-9r4m-mvj7",
    summary: "Requests vulnerable to .netrc credentials leak via malicious...",
    risk: "Low",
    published: "08/10/2024",
    modified: "08/10/2024",
  },
  {
    id: "GHSA-3abc-7xyz-efg1",
    summary: "Deserialization of Untrusted Data in PyYAML",
    risk: "Medium",
    published: "08/13/2024",
    modified: "08/13/2024",
  },
  {
    id: "GHSA-2def-8uvw-hij3",
    summary: "Improper Input Validation in PyYAML",
    risk: "High",
    published: "08/14/2024",
    modified: "08/14/2024",
  },
  {
    id: "GHSA-5klm-1nop-qrst",
    summary: "Internationalized Domain Names in Applications (IDNA) vuln...",
    risk: "Critical",
    published: "08/15/2024",
    modified: "08/15/2024",
  },
  {
    id: "GHSA-7pqr-4stu-vwxy",
    summary: "Header injection possible in Django",
    risk: "Unspecified",
    published: "08/16/2024",
    modified: "08/16/2024",
  },
];
