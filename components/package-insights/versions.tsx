import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { VersionData } from "@/types";
import Link from "next/link";

export default function VersionsTab({ versions }: { versions: VersionData[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[60%]">Version</TableHead>
          <TableHead className="w-[25%]">Published On</TableHead>
          <TableHead className="w-[15%]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {versions.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center">
              No version data found.
            </TableCell>
          </TableRow>
        ) : (
          versions.map((version) => (
            <TableRow key={version.version}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="bg-muted rounded px-2 py-0.5 text-xs font-medium">
                    {version.version}
                  </span>
                  {version.isLatest && (
                    <span className="rounded bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
                      Latest
                    </span>
                  )}
                </div>
              </TableCell>
              <TableCell>{version.publishedAt}</TableCell>
              <TableCell className="text-right">
                <Link
                  href="#"
                  className="text-primary hover:text-primary/90 text-sm font-medium"
                >
                  View Version
                </Link>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
