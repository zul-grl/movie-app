import { Card } from "@/components/ui/card";
import Allgenres from "../_components/Allgenres";
import { MovieCard } from "../_components/MovieCard";
import response from "../_util/response";
import { Movietype } from "../_util/type";
import { PaginationDemo } from "../_components/Pagination";

const SearchPage = async ({
  searchParams,
}: {
  searchParams: { searchValue: string; page: string };
}) => {
  const searchValue = searchParams.searchValue;

  const data = await response(
    `/search/movie?query=${searchValue}&language=en-US&page=1`
  );
  const movies: Movietype[] = data.results;
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  console.log(movies);
  return (
    <div className="max-w-[1280px] m-auto flex flex-col gap-8 mt-[52px]">
      <h2 className="text-[30px] font-semibold">Search results</h2>
      <div className="flex gap-7">
        <div className="flex flex-col gap-8 w-full max-w-[804px]">
          <h4 className="text-[20px] font-semibold">
            {movies.length} results for "{searchValue}"
          </h4>
          <div className="grid grid-cols-4 gap-[32px] max-w-[804px] mt-[32px]">
            {movies?.map((movie: Movietype) => (
              <MovieCard key={movie.id} movie={movie} index={movie.id} />
            ))}
          </div>
          <PaginationDemo />
        </div>
        <Card className="rounded-md w-[360px] h-[260px] border-none">
          <h3 className="text-[24px]">Search by genre</h3>
          <div>See lists of movies by genre</div>
          <div className="my-2"></div>
          <div className="flex flex-wrap gap-4">
            <Allgenres genreMovies={genreMovies} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SearchPage;
