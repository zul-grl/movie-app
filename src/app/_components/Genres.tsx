import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import response from "../_util/response";
import { GenreType } from "../_util/type";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, ChevronRight } from "lucide-react";

const Genre = async () => {
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Genre</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Card className="-left-9 p-5 absolute rounded-md w-[537px] h-[260px]">
          <h3 className="text-[24px]">Genres</h3>
          <div>See lists of movies by genre</div>
          <div className="border border-[#27272A] my-2"></div>
          <div className="flex flex-wrap gap-4">
            {genreMovies?.map((genre: GenreType) => {
              return (
                <button className="flex text-[12px] rounded-full border justify-center items-center border-[#27272A] py-[2px] px-2">
                  {genre.name} <ChevronRight className="w-4 h-4" />
                </button>
              );
            })}
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
export default Genre;
