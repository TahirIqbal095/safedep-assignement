"use client";

import { useState } from "react";
import OverviewTab from "./overview";
import VulnerabilitiesTab from "./vulnerabilities";
import VersionsTab from "./versions";
import LicensesTab from "./licenses";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { LicenseData, VersionData, VulnerabilityData } from "@/types";
import { motion, AnimatePresence } from "motion/react";

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
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <section>
      <Tabs
        defaultValue="overview"
        value={activeTab}
        onValueChange={setActiveTab}
      >
        <div className="border-border overflow-x-auto border-b py-2">
          <TabsList className="ml-2 flex items-center gap-4 md:ml-6 md:gap-8">
            {tabs.map((tab) => (
              <TabsTrigger
                value={tab.value}
                key={tab.value}
                className="relative bg-transparent data-[state=active]:bg-transparent data-[state=active]:shadow-none"
              >
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="active-tab"
                    className="bg-card shadow-custom absolute inset-0 rounded border border-transparent"
                    transition={{
                      type: "spring",
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </div>
        <div className="min-h-150 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.3 }}
            >
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
            </motion.div>
          </AnimatePresence>
        </div>
      </Tabs>
    </section>
  );
}
