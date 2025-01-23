import Similar from "@/app/_components/Similar";
import response from "@/app/_util/response";

const Similarpage = async ({ params }: { params: { similarid: string } }) => {
  const movieid = params.similarid;
  const similarMovies = await response(
    `/movie/${movieid}/similar?language=en-US&page=1`
  );
  const similar = similarMovies.results;
  return <Similar movies={similar} id={params.similarid} a={false} />;
};
export default Similarpage;
