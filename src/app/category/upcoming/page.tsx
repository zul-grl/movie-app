import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import Upcoming from "@/app/_components/Upcoming";
import response from "@/app/_util/response";

export default async function UpcomingPage() {
  const data = await response("/movie/upcoming?language=en-US&page=1");
  const movies = data.results;

  return (
    <div>
      <Header />
      <div className="my-[52px]">
        <Upcoming movies={movies} a={false} />
      </div>
      <Footer />
    </div>
  );
}
