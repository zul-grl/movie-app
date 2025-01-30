import { Videotype } from "@/app/_util/type";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Play } from "lucide-react";
const Youtube = async ({ videodata }: { videodata: Videotype }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-3 bottom-5 left-[340px] absolute">
          <div className="bg-white border-none p-2 rounded-full ">
            <Play color="black" />
          </div>
          <p className="text-white">Play trailer</p>
        </div>
      </DialogTrigger>

      <DialogContent>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videodata.key}`}
        ></iframe>
        <DialogHeader>
          <DialogTitle></DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
export default Youtube;
