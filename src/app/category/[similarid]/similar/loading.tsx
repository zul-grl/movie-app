import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="">
      <div className="max-w-[1080px] m-auto">
        <div className="flex justify-between mt-[52px]">
          <Skeleton className="rounded-full w-[230px] h-8" />
        </div>
        <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
          {Array.from({ length: 20 }, (_, i) => {
            return <Skeleton className="w-[188px] h-[387px]" />;
          })}
        </div>
      </div>
    </div>
  );
}
