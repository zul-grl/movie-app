import CustomPagination from "@/app/_components/CustomPagination";
import Toprated from "@/app/_components/Toprated";
import response from "@/app/_util/response";

export default async function TopRatedPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const data = await response(`/movie/top_rated?language=en-US&page=${page}`);
  const movies = data.results;
  const totalPages = 500;

  return (
    <>
      <Toprated movies={movies} a={false} />
      <div className="flex justify-center mt-8">
        <CustomPagination page={page} totalPages={totalPages} />
      </div>
    </>
  );
}
