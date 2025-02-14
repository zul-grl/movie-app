import CustomPagination from "@/app/_components/CustomPagination";
import Upcoming from "@/app/_components/Upcoming";
import response from "@/app/_util/response";
interface Props {
  searchParams: Promise<{ page?: string }>;
}
export default async function UpcomingPage(props: Props) {
  const totalPages = 500;
  const searchParams = await props.searchParams;
  const page = Number(searchParams.page) || 1;
  const data = await response(`/movie/upcoming?language=en-US&page=${page}`);
  await new Promise((resolve) => setTimeout(resolve, 1500));
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
