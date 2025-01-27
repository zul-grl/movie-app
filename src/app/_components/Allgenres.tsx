import { Toggle } from "@radix-ui/react-toggle";
import { GenreType } from "../_util/type";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const Allgenres = ({ genreMovies }: { genreMovies: GenreType[] }) => {
  return (
    <Card className="-left-9 p-5 absolute rounded-md w-[537px] h-[260px]">
      <h3 className="text-[24px]">Genres</h3>
      <div>See lists of movies by genre</div>
      <div className="border border-[#27272A] my-2"></div>
      <div className="flex flex-wrap gap-4">
        {genreMovies?.map((genre: GenreType, index: number) => {
          return (
            <Toggle
              key={index}
              className="flex text-[12px] rounded-full border justify-center items-center border-[#27272A] py-[2px] px-2"
            >
              {genre.name} <ChevronRight className="w-4 h-4" />
            </Toggle>
          );
        })}
      </div>
    </Card>
  );
};
export default Allgenres;
