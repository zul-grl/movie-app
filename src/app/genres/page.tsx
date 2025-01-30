import Allgenres from "@/app/_components/Allgenres";
import { MovieCard } from "@/app/_components/MovieCard";
import { PaginationDemo } from "@/app/_components/Pagination";
import response from "@/app/_util/response";
import { Movietype } from "@/app/_util/type";

async function getMovies(genres: string) {
  return await response(
    `/discover/movie?language=en&with_genres=${genres}&page=1`
  );
}

export default async function GenresPage({
  searchParams,
}: {
  searchParams: { genres: string };
}) {
  const selectedGenres = searchParams.genres;
  const genreData = await response("/genre/movie/list?language=en");
  const genres = genreData.genres || [];
  const moviesData = selectedGenres ? await getMovies(selectedGenres) : null;

  const movies = moviesData?.results || [];
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
          <h4 className="text-[20px] font-semibold">
            {movies.length} results for selected genres
          </h4>
          <div>
            {selectedGenres && (
              <div className="grid grid-cols-4 gap-[32px] max-w-[804px] mt-[32px]">
                {movies.length > 0 ? (
                  <>
                    {movies?.map((movie: Movietype) => (
                      <MovieCard
                        key={movie.id}
                        movie={movie}
                        index={movie.id}
                      />
                    ))}
                  </>
                ) : (
                  ""
                )}
              </div>
            )}
          </div>
          <PaginationDemo />
        </div>
      </div>
    </div>
  );
}
