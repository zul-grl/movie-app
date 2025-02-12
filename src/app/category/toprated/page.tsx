import CustomPagination from "@/app/_components/CustomPagination";
import Toprated from "@/app/_components/Toprated";
import response from "@/app/_util/response";
interface Props {
  searchParams: Promise<{ page?: string }>;
}
export default async function TopRatedPage(props: Props) {
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const data = await response(`/movie/top_rated?language=en-US&page=${page}`);
  const movies = data.results;
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const totalPages = 500;
  console.log(movies);

  return (
    <>
      <Toprated movies={movies} a={false} />
      <div className="flex justify-center mt-8">
        <CustomPagination page={page} totalPages={totalPages} />
      </div>
    </>
  );
}
