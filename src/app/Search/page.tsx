import { Card } from "@/components/ui/card";
import { MovieCard } from "../_components/MovieCard";
import response from "../_util/response";
import { Movietype } from "../_util/type";
import SearchGenres from "../_components/SearchGenres";
import CustomPagination from "../_components/CustomPagination";

interface Props {
  searchParams: Promise<{ searchValue: string; genres: string; page?: string }>;
}
const SearchPage = async (props: Props) => {
  const searchParams = await props.searchParams;
  const params = await searchParams;
  const searchValue = params.searchValue;
  const selectedGenres = params.genres
    ? params.genres.split(",").map(Number)
    : [];
  const totalPages = 500;
  const page = Number(params.page) || 1;
  const data =
    searchValue.length > 0
      ? await response(
          `/search/movie?query=${searchValue}&language=en-US&page=${page}`
        )
      : "";
  const movies: Movietype[] = data.results;
  const searchedMovies = data.total_results;
  const filteredMovies =
    selectedGenres.length > 0
      ? movies.filter((movie) =>
          movie.genre_ids.some((genreId) => selectedGenres.includes(genreId))
        )
      : movies;
  const genreData = await response("/genre/movie/list?language=en");
  const genreMovies = genreData.genres;
  return (
    <div className="max-w-[1280px] m-auto flex flex-col gap-8 mt-[52px]">
      <h2 className="text-[30px] font-semibold">Search results</h2>
      <div className="flex gap-7">
        <div className="flex flex-col gap-8 w-full max-w-[804px]">
          {selectedGenres.length > 0 ? (
            <h4 className="text-[20px] font-semibold">
              {filteredMovies.length} results for &#34;{searchValue}&#34;
            </h4>
          ) : (
            <h4 className="text-[20px] font-semibold">
              {searchedMovies} results for &#34;{searchValue}&#34;
            </h4>
          )}
          {filteredMovies.length > 0 ? (
            <div className="grid grid-cols-4 gap-[32px] max-w-[804px] mt-[32px]">
              {filteredMovies?.map((movie: Movietype) => {
                return <MovieCard key={movie.id} movie={movie} />;
              })}
            </div>
          ) : (
            <div className="justify-center">
              <p> No results found.</p>
            </div>
          )}
        </div>
        <Card className="rounded-md w-[360px] h-[370px] border-none shadow-none">
          <h3 className="text-[24px]">Search by genre</h3>
          <div>See lists of movies by genre</div>
          <div className="my-2"></div>
          <div className="flex flex-wrap gap-4">
            <SearchGenres genreMovies={genreMovies} />
          </div>
        </Card>
      </div>
      <div className="flex justify-center mt-8">
        <CustomPagination page={page} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default SearchPage;
