import { OverviewSection } from "@/types";

export const overviewConfig: OverviewSection[] = [
  {
    title: "Summary",
    borderColor: "border-primary",
    content: [
      {
        type: "text",
        value:
          "This analysis was performed using vet and SafeDep Cloud Malicious Package Analysis. Integrate with GitHub using vet-action GitHub Action.",
      },
      {
        type: "note",
        value: "This report is updated by a verification record",
      },
      {
        type: "text",
        value:
          "Multiple files flagged for potential data exfiltration, XSS, and RCE vulnerabilities. High confidence of malicious intent due to combined factors.",
      },
    ],
  },
  {
    title: "Verification Record",
    content: [
      {
        type: "text",
        value: "Manual analysis confirmed that the package is clean.",
      },
    ],
  },
  {
    title: "Details",
    content: [
      {
        type: "note",
        value: "This report is updated by a verification record",
      },
      {
        type: "text",
        value:
          "The package exhibits multiple concerning behaviors. Several files match the 'sys_net_recon_exfil' YARA rule, suggesting potential system and network information exfiltration. Additionally, the code constructs javascript: URLs and assigns them to formAction attributes, which can lead to XSS or RCE if user-controlled data is involved. Furthermore, dynamic code execution is possible via formatDynamicImportPath if the cacheHandlers configuration is compromised. These factors, combined, indicate malicious intent.",
      },
    ],
  },
];
