import Popular from "@/app/_components/Popular";
import response from "@/app/_util/response";
import { PaginationDemo } from "../components/Pagination";

export default async function PopularPage() {
  const data = await response("/movie/popular?language=en-US&page=1");
  const movies = data.results;
  return (
    <div>
      <Popular movies={movies} a={false} />
      <PaginationDemo />
    </div>
  );
}
