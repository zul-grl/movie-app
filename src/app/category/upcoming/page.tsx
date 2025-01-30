import CustomPagination from "@/app/_components/CustomPagination";
import Upcoming from "@/app/_components/Upcoming";
import response from "@/app/_util/response";

export default async function UpcomingPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const totalPages = 500;
  const page = Number(searchParams.page) || 1;
  const data = await response(`/movie/upcoming?language=en-US&page=${page}`);
  const movies = data.results;

  return (
    <>
      <Upcoming movies={movies} a={false} />
      <div className="flex justify-center mt-8">
        <CustomPagination page={page} totalPages={totalPages} />
      </div>
    </>
  );
}
