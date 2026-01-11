import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LicenseData } from "@/types";

export default function LicensesTab({ licenses }: { licenses: LicenseData[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[20%]">License ID</TableHead>
          <TableHead className="w-[40%]">License Name</TableHead>
          <TableHead className="w-[40%]">Reference URL</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {licenses.length === 0 ? (
          <TableRow>
            <TableCell colSpan={3} className="h-24 text-center">
              No license data found.
            </TableCell>
          </TableRow>
        ) : (
          licenses.map((license) => (
            <TableRow key={license.id}>
              <TableCell>{license.id}</TableCell>
              <TableCell>{license.name}</TableCell>
              <TableCell>
                <a
                  href={license.url}
                  className="text-primary hover:text-primary/90 underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {license.url}
                </a>
              </TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}
