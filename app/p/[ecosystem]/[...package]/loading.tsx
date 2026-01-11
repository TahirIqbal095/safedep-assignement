import Header from "@/components/package-details/header";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-4">
      <Header />
      <main className="shadow-custom mt-8 overflow-hidden rounded">
        <div className="border-border space-y-4 border-b bg-[#F8FAFC] p-5">
          <section className="flex flex-col gap-1.5 text-sm">
            <div className="flex items-center gap-1.5">
              <Skeleton className="h-6.5 w-6.5 rounded" />
              <Skeleton className="h-7 w-48" />
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-32" />
              </div>
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-64" />
              </div>
              <div className="flex items-center gap-1.5">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-4 w-40" />
              </div>
            </div>
          </section>

          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="bg-card shadow-custom rounded p-3">
                <div className="flex items-center gap-1.5">
                  <Skeleton className="h-6 w-6 rounded" />
                  <Skeleton className="h-5 w-24" />
                </div>
                <Skeleton className="mt-4 h-7 w-16" />
              </div>
            ))}
          </section>
        </div>

        <section>
          <div className="border-border border-b py-2">
            <div className="ml-4 flex items-center gap-4 md:ml-6 md:gap-8">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton key={i} className="h-6 w-20" />
              ))}
            </div>
          </div>

          <div className="min-h-150 bg-white pt-8">
            <div className="mx-auto max-w-4xl space-y-6 px-4">
              <Skeleton className="h-8 w-48" />
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Skeleton className="h-48 w-full rounded-lg" />
                <Skeleton className="h-48 w-full rounded-lg" />
              </div>
              <Skeleton className="h-64 w-full rounded-lg" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
