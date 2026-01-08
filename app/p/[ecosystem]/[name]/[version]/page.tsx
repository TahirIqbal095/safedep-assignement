import { InsightErrorDialog } from "@/components/insight-error-dialog";
import { getPackageInsight } from "@/lib/safedep";

interface Props {
  params: Promise<{ ecosystem: string; name: string; version: string }>;
}

async function OpenSourcePackageDetails({ params }: Props) {
  const { ecosystem, name, version } = await params;
  let data;

  try {
    data = await getPackageInsight({
      ecosystem,
      name: name,
      version,
    });
  } catch (error) {
    console.error(error);
    return (
      <InsightErrorDialog
        message={
          error instanceof Error
            ? error.message
            : "Failed to load package details"
        }
      />
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Package Details</h1>
      <pre className="mt-4 overflow-auto rounded bg-gray-100 p-4">
        {JSON.stringify(data.toJson(), null, 2)}
      </pre>
    </div>
  );
}

export default OpenSourcePackageDetails;
