import CustomPagination from "@/app/_components/CustomPagination";
import Similar from "@/app/_components/Similar";
import response from "@/app/_util/response";

const Similarpage = async ({
  params,
  searchParams,
}: {
  params: { similarid: string };
  searchParams: { page?: string };
}) => {
  const movieid = params.similarid;

  const page = Number(searchParams.page) || 1;
  const totalPages = 500;
  const similarMovies = await response(
    `/movie/${movieid}/similar?language=en-US&page=${page}`
  );
  const similar = similarMovies.results;
  ``;
  return (
    <>
      <Similar movies={similar} id={params.similarid} a={false} />
      <div className="flex justify-center mt-8">
        <CustomPagination page={page} totalPages={totalPages} />
      </div>
    </>
  );
};
export default Similarpage;
