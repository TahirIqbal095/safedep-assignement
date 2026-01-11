import OverviewTab from "./package-insights/overview";
import VulnerabilitiesTab from "./package-insights/vulnerabilities";
import VersionsTab from "./package-insights/versions";
import LicensesTab from "./package-insights/licenses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { LicenseData, VersionData, VulnerabilityData } from "@/types";

interface PackageInsightsPanelProps {
  vulnerabilities: VulnerabilityData[];
  versions: VersionData[];
  licenses: LicenseData[];
}

const tabs = [
  { label: "Overview", value: "overview" },
  { label: "Vulnerabilities", value: "vulnerabilities" },
  { label: "Versions", value: "versions" },
  { label: "Licenses", value: "licenses" },
];

export default function PackageInsightsPanel({
  vulnerabilities,
  versions,
  licenses,
}: PackageInsightsPanelProps) {
  return (
    <section>
      <Tabs defaultValue="overview">
        <div className="border-border border-b py-2">
          <TabsList className="ml-4 flex items-center gap-4 md:ml-6 md:gap-8">
            {tabs.map((tab) => (
              <TabsTrigger value={tab.value} key={tab.value}>
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="min-h-150 bg-white">
          <TabsContent className="mx-auto max-w-4xl" value="overview">
            <OverviewTab />
          </TabsContent>
          <TabsContent value="vulnerabilities">
            <VulnerabilitiesTab vulns={vulnerabilities} />
          </TabsContent>
          <TabsContent value="versions">
            <VersionsTab versions={versions} />
          </TabsContent>
          <TabsContent value="licenses">
            <LicensesTab licenses={licenses} />
          </TabsContent>
        </div>
      </Tabs>
    </section>
  );
}
