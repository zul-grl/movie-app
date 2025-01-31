import CustomPagination from "@/app/_components/CustomPagination";
import Similar from "@/app/_components/Similar";
import response from "@/app/_util/response";
import React from "react";

interface Props {
  params: Promise<{ similarid: string }>;
  searchParams: Promise<{ page?: string }>;
}
const Similarpage = async (props: Props) => {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const movieid = params.similarid;
  const page = Number(searchParams.page) || 1;
  const totalPages = 500;
  const similarMovies = await response(
    `/movie/${movieid}/similar?language=en-US&page=${page}`
  );
  const similar = similarMovies.results;
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
