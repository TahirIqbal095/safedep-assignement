export interface VersionData {
  version: string;
  isLatest?: boolean;
  publishedAt: string;
}

export const versionsData: VersionData[] = [
  {
    version: "0.24.0",
    isLatest: true,
    publishedAt: "08/10/2024",
  },
  {
    version: "1.2.3",
    publishedAt: "08/13/2024",
  },
  {
    version: "5.0.0",
    publishedAt: "08/14/2024",
  },
  {
    version: "5.0.1",
    publishedAt: "08/15/2024",
  },
  {
    version: "5.0.2",
    publishedAt: "08/16/2024",
  },
];
