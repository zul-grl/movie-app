import Header from "@/app/_components/Header";
import Toprated from "@/app/_components/Toprated";
import response from "@/app/_util/response";

export default async function TopRatedPage() {
  const data = await response("/movie/top_rated?language=en-US&page=1");
  const movies = data.results;

  return <div>
       <Header />
     <Toprated movies={movies} />
  </div>;
}