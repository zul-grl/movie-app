import Header from "@/app/_components/Header";
import Popular from "@/app/_components/Popular";
import response from "@/app/_util/response";

export default async function PopularPage() {
  const data = await response("/movie/popular?language=en-US&page=1");
  const movies = data.results;

  return (
    <div>
      <Header />
      <Popular movies={movies} />
    </div>
  );
}
