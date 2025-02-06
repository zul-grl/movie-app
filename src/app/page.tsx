import NowPlaying from "./_components/NowPlaying";
import Popular from "./_components/Popular";
import Toprated from "./_components/Toprated";
import Upcoming from "./_components/Upcoming";
import response from "./_util/response";
export default async function Home() {
  const popularData = await response("/movie/popular?language=en-US&page=1");
  const upcomingData = await response("/movie/upcoming?language=en-US&page=1");
  const topRatedData = await response("/movie/top_rated?language=en-US&page=1");
  const popularMovies = popularData.results.slice(0, 10);
  const upcomingMovies = upcomingData.results.slice(0, 10);
  const topRatedMovies = topRatedData.results.slice(0, 10);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <div className="h-full w-full">
      <NowPlaying />
      <div className="mb-[52px] flex flex-col relative">
        <Upcoming movies={upcomingMovies} a={true} />
        <Popular movies={popularMovies} a={true} />
        <Toprated movies={topRatedMovies} a={true} />
      </div>
    </div>
  );
}
