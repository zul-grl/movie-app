import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="">
      <Skeleton className="h-[600px] w-full rounded-xl bg-secondary" />
      <div className="max-w-[1280px] m-auto">
        <div className="flex justify-between mt-[52px]">
          <Skeleton className="rounded-full w-[230px] h-8" />
          <Skeleton className="rounded-full w-[230px] h-8" />
        </div>
        <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
          {Array.from({ length: 10 }, (_, i) => {
            return <Skeleton className="w-[228px] h-[387px]" />;
          })}
        </div>
        <div className="flex justify-between mt-[52px]">
          <Skeleton className="rounded-full w-[230px] h-8" />
          <Skeleton className="rounded-full w-[230px] h-8" />
        </div>
        <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
          {Array.from({ length: 10 }, (_, i) => {
            return <Skeleton className="w-[228px] h-[387px]" />;
          })}
        </div>
        <div className="flex justify-between mt-[52px]">
          <Skeleton className="rounded-full w-[230px] h-8" />
          <Skeleton className="rounded-full w-[230px] h-8" />
        </div>
        <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
          {Array.from({ length: 10 }, (_, i) => {
            return <Skeleton className="w-[228px] h-[387px]" />;
          })}
        </div>
      </div>
    </div>
  );
}
