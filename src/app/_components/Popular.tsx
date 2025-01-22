import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Movietype } from "../_util/type";
import { MovieCard } from "./MovieCard";

const Popular = ({ movies }: { movies: Movietype[] }) => {
  return (
    <div className="max-w-[1280px] m-auto">
      <div className="flex justify-between">
        <h3 className="text-[24px] font-semibold">Popular</h3>
        <Link
          href="/category/popular"
          className={"flex items-center cursor-pointer"}
        >
          See more <ArrowRight className="ml-2" />
        </Link>
      </div>
      <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
        {movies.map((movie: Movietype, index: number) => (
          <MovieCard movie={movie} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
