import response from "@/app/_util/response";
import { Movietype } from "@/app/_util/type";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SearchPage = ({ searchValue }: { searchValue: string }) => {
  const [movies, setMovies] = useState<Movietype[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await response(
        `/search/movie?query=${searchValue}&language=en-US&page=1`
      );
      setMovies(data.results);
    };

    fetchMovies();
  }, [searchValue]);
  console.log(searchValue);
  return (
    <div>
      {movies?.slice(0, 5).map((movie: Movietype, index: number) => (
        <Link key={index} href={`/details/${movie.id}`}>
          <div className="flex-1 hover:bg-secondary transition-all ease-in rounded-xl overflow-hidden p-3 mt-2 ">
            <div className="flex gap-4 ">
              <div className="h-[90px] w-[67px] rounded-md overflow-hidden">
                <Image
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  width={1000}
                  height={1000}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full">
                <CardTitle className="text-lg">{movie.title}</CardTitle>

                <div className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={17}
                    fill="none"
                  >
                    <path
                      fill="#FDE047"
                      stroke="#FDE047"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8 1.433 2.06 4.174 4.607.673-3.334 3.247.787 4.586L8 11.947l-4.12 2.166.787-4.586L1.333 6.28l4.607-.673L8 1.433Z"
                    />
                  </svg>
                  <p className="text-sm font-medium">
                    {movie.vote_average.toFixed(1)}
                    <span className="text-muted-foreground">/10</span>
                  </p>
                </div>

                <div
                  className={"flex justify-end w-full cursor-pointer text-sm"}
                >
                  See more <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
      {movies.length > 0 ? (
        <Link href={`/Search?searchValue=${searchValue}`}>
          <p className="mt-3">See all results for &#34;{searchValue} &#34;</p>
        </Link>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default SearchPage;
