import { RiskLevel, vulnerabilitiesData } from "@/config/vulnerabilities";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  HelpCircle,
  LucideIcon,
  ShieldAlert,
  ShieldCheck,
  Zap,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const RiskBadge = ({ risk }: { risk: RiskLevel }) => {
  const styles: Record<
    RiskLevel,
    { bg: string; text: string; icon: LucideIcon }
  > = {
    Low: {
      bg: "bg-cyan-50",
      text: "text-cyan-600",
      icon: ShieldCheck,
    },
    Medium: {
      bg: "bg-yellow-50",
      text: "text-yellow-600",
      icon: AlertTriangle,
    },
    High: {
      bg: "bg-pink-50",
      text: "text-pink-600",
      icon: Zap,
    },
    Critical: {
      bg: "bg-red-50",
      text: "text-red-600",
      icon: ShieldAlert,
    },
    Unspecified: {
      bg: "bg-gray-50",
      text: "text-gray-500",
      icon: HelpCircle,
    },
  };

  const config = styles[risk];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded px-2 py-0.5 text-xs font-medium",
        config.bg,
        config.text
      )}
    >
      <Icon size={12} className={cn(config.text)} />
      {risk}
    </span>
  );
};

export default function VulnerabilitiesTab() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Vulnerability ID</TableHead>
          <TableHead>Summary</TableHead>
          <TableHead>Risk</TableHead>
          <TableHead>Published</TableHead>
          <TableHead>Modified</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vulnerabilitiesData.map((vuln) => (
          <TableRow key={vuln.id}>
            <TableCell>{vuln.id}</TableCell>
            <TableCell>{vuln.summary}</TableCell>
            <TableCell>
              <RiskBadge risk={vuln.risk} />
            </TableCell>
            <TableCell>{vuln.published}</TableCell>
            <TableCell>{vuln.modified}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
