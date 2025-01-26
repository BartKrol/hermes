import Header from "@/components/layout/header";
import { TextSkeleton } from "@/components/text-skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen justify-between">
      <Header />
      <main className="flex flex-col container mx-auto px-4 flex-grow gap-8 py-4 max-w-screen-sm">
        <TextSkeleton />
      </main>
    </div>
  );
}
