import { Skeleton } from "./ui/skeleton";

export function TextSkeleton() {
  return (
    <>
      <Skeleton className="h-4 w-[50%]" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[90%]" />
      <Skeleton className="h-4 w-[70%]" />
    </>
  );
}
