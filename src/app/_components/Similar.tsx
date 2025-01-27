import { ArrowRight } from "lucide-react";
import { MovieCard } from "./MovieCard";
import { Movietype } from "../_util/type";
import Link from "next/link";

const Similar = ({
  movies,
  a,
  id,
}: {
  movies: Movietype[];
  a: boolean;
  id: string;
}) => {
  return (
    <div className="mt-[52px]">
      <div className="max-w-[1080px] m-auto">
        <div className="flex justify-between">
          <h3 className="text-2xl font-semibold">More like this</h3>
          {a ? (
            <Link
              href={`/category/${id}/similar`}
              className={"flex items-center cursor-pointer"}
            >
              See more <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          ) : (
            ""
          )}
        </div>
        <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
          {movies?.map((movie: Movietype, index: number) => (
            <MovieCard movie={movie} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Similar;
