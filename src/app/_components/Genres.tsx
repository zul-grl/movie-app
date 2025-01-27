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
import { Toggle } from "@/components/ui/toggle";
import Link from "next/link";
import Allgenres from "./Allgenres";

const Genre = async () => {
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  console.log(genreMovies);
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Genre</Button>
      </PopoverTrigger>
      <PopoverContent>
        <Allgenres genreMovies={genreMovies} />
      </PopoverContent>
    </Popover>
  );
};
export default Genre;
