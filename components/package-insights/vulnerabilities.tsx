import { VulnerabilityData } from "@/types";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiskBadge } from "../risk-badge";

export default function VulnerabilitiesTab({
  vulns,
}: {
  vulns: VulnerabilityData[];
}) {
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
        {vulns.length === 0 ? (
          <TableRow>
            <TableCell colSpan={5} className="h-24 text-center">
              No vulnerabilities found.
            </TableCell>
          </TableRow>
        ) : (
          vulns.map((vuln) => (
            <TableRow key={vuln.id}>
              <TableCell>{vuln.id}</TableCell>
              <TableCell>{vuln.summary}</TableCell>
              <TableCell>
                <RiskBadge risk={vuln.risk} />
              </TableCell>
              <TableCell>{vuln.published}</TableCell>
              <TableCell>{vuln.modified}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
