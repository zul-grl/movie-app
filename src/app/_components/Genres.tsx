import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import response from "../_util/response";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Allgenres from "./Allgenres";

const Genre = async () => {
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  // console.log(genreMovies);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Genre</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Card className="-left-9 p-5 absolute rounded-md w-[537px] h-[320px]">
          <h3 className="text-[24px]">Genres</h3>
          <div>See lists of movies by genre</div>
          <div className="border border-[#27272A] my-2"></div>
          <div className="flex flex-wrap gap-4">
            <Allgenres genreMovies={genreMovies} />
          </div>
        </Card>
      </PopoverContent>
    </Popover>
  );
};
export default Genre;
