import Popular from "@/app/_components/Popular";
import response from "@/app/_util/response";
import CustomPagination from "@/app/_components/CustomPagination";

export default async function PopularPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;
  const data = await response(`/movie/popular?language=en-US&page=${page}`);
  console.log(data);
  const totalPages = 500;

  return (
    <>
      <Popular movies={data.results} a={false} />
      <div className="flex justify-center mt-8">
        <CustomPagination page={page} totalPages={totalPages} />
      </div>
    </>
  );
}
