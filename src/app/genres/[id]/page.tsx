import response from "@/app/_util/response";
import { MovieCard } from "@/app/_components/MovieCard";
import { GenreType, Movietype } from "@/app/_util/type";

interface GenrePageProps {
  params: {
    id: string;
  };
}

interface MovieResponse {
  results: Movietype[];
  total_pages: number;
}

interface GenreResponse {
  genres: GenreType[];
}

const GenrePage = async ({ params }: GenrePageProps) => {
  const genreIds = params.id.split(",");

  const genreData = (await response(
    "/genre/movie/list?language=en"
  )) as GenreResponse;
  const genreNames = genreIds
    .map((id) => genreData.genres.find((g) => g.id === parseInt(id))?.name)
    .filter(Boolean);

  const data = (await response(
    `/discover/movie?language=en&with_genres=${params.id}`
  )) as MovieResponse;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        {genreNames.join(" & ")} Movies
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {data.results.map((movie) => (
          <MovieCard index={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GenrePage;
