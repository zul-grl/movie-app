import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="">
      <div className="max-w-[1080px] py-[52px] m-auto flex flex-col">
        <div className="flex justify-between">
          <div className="mb-6">
            <Skeleton />
          </div>
        </div>
        <div className="flex gap-8 w-full h-[524px] relative">
          <Skeleton className="w-[290px] rounded-xl" />
          <Skeleton className="w-[760px] h-[100%]" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="mt-6 flex gap-3">
            {Array.from({ length: 5 }, (_, i) => {
              return (
                <Skeleton className="w-[76px] h-4 rounded-full border border-[#27272A] py-[2px] px-2" />
              );
            })}
          </div>
          <div>
            <Skeleton className="rounded-full bg-secondary w-full" />
            <Skeleton className="rounded-full  bg-secondary w-[700px]" />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
          {Array.from({ length: 5 }, (_, i) => {
            return <Skeleton className="w-[190px] h-[387px]" />;
          })}
        </div>
      </div>
    </div>
  );
}
