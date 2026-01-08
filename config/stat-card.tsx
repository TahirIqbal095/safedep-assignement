import { Award, BookOpenText, Bug, CircleAlert, Earth } from "lucide-react";

export type StatCardConfig = {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  primary?: boolean;
  danger?: boolean;
};

export const statCardConfig: StatCardConfig[] = [
  { label: "Version", value: "1.2.4", icon: <CircleAlert size={14} /> },
  {
    label: "Vulnerabilities",
    value: "5",
    icon: <Bug size={14} />,
    danger: true,
  },
  {
    label: "OpenSSF Scorecard",
    value: "9.5/10",
    primary: true,
    icon: <BookOpenText size={14} />,
  },
  { label: "License", value: "Apache-2.0", icon: <Award size={14} /> },
  { label: "Ecosystem", value: "Go", icon: <Earth size={14} /> },
];
