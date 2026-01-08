import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { licensesData } from "@/config/licenses";

export default function LicensesTab() {
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
        {licensesData.map((license) => (
          <TableRow key={license.id}>
            <TableCell>{license.id}</TableCell>
            <TableCell>{license.name}</TableCell>
            <TableCell>{license.url}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
