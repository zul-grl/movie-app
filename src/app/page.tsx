import Footer from "./_components/Footer";
import Header from "./_components/Header";
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
  return (
    <div className="h-full w-full">
      <Header />
      <div className="py-[52px] flex flex-col gap-[52px] relative">
        <Upcoming movies={upcomingMovies} />
        <Popular movies={popularMovies} />
        <Toprated movies={topRatedMovies} />
      </div>
      <Footer />
    </div>
  );
}
