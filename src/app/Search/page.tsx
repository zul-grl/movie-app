import { MovieCard } from "../_components/MovieCard";
import response from "../_util/response";
import { Movietype } from "../_util/type";

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

  return (
    <div className="max-w-[1280px] m-auto">
      <div className="grid grid-cols-5 gap-[32px] mt-[32px]">
        {movies?.map((movie: Movietype) => (
          <MovieCard movie={movie} index={movie.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
