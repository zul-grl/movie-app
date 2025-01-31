import Allgenres from "@/app/_components/Allgenres";
import { MovieCard } from "@/app/_components/MovieCard";
import response from "@/app/_util/response";
import { Movietype } from "@/app/_util/type";
import CustomPagination from "../_components/CustomPagination";
interface Props {
  searchParams: Promise<{ genres: string; page?: string }>;
}
async function getMovies(genres: string, page: number) {
  const movies = await response(
    `/discover/movie?language=en&with_genres=${genres}&page=${page}`
  );
  return movies;
}

export default async function GenresPage(props: Props) {
  const searchParams = await props.searchParams;
  const params = await searchParams;
  const paramPage = params.page;
  const page = Number(paramPage) || 1;

  const selectedGenres = params.genres;
  const genreData = await response("/genre/movie/list?language=en");
  const genres = genreData.genres || [];
  const moviesData = selectedGenres
    ? await getMovies(selectedGenres, page)
    : null;
  const totalPages = moviesData?.total_pages;
  const movies = moviesData?.results || [];
  const totalMovies = moviesData?.total_results || 0;
  return (
    <div className="max-w-[1280px] m-auto flex flex-col gap-8 mt-[52px]">
      <h2 className="text-[30px] font-semibold">Search Filter</h2>
      <div className="flex gap-7">
        <div className="rounded-md w-[360px] h-[260px] border-none">
          <h3 className="text-[24px]">Genres</h3>
          <div>See lists of movies by genre</div>
          <div className="my-2"></div>
          <div className="flex flex-wrap gap-4">
            <Allgenres genreMovies={genres} />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h4 className="text-[20px] font-semibold">{totalMovies} titles</h4>
          <div>
            {selectedGenres && (
              <div className="grid grid-cols-4 gap-[32px] max-w-[804px] mt-[32px]">
                {movies.length > 0 ? (
                  <>
                    {movies?.map((movie: Movietype) => (
                      <MovieCard key={movie.id} movie={movie} />
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <CustomPagination page={page} totalPages={totalPages} />
    </div>
  );
}
