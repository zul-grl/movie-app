import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Movietype } from "../_util/type";
import { MovieCard } from "./MovieCard";

const Toprated = ({ movies, a }: { movies: Movietype[]; a: boolean }) => {
  return (
    <div className="mt-[52px]">
      <div className="max-w-[1280px] m-auto">
        <div className="flex justify-between">
          <h3 className="text-[24px] font-semibold">Top Rated</h3>
          {a ? (
            <Link
              href="/category/toprated"
              className={"flex items-center cursor-pointer"}
            >
              See more <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
          {movies.map((movie: Movietype, index: number) => (
            <MovieCard movie={movie} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Toprated;
