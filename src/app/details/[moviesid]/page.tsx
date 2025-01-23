import response from "@/app/_util/response";
import { Movietype } from "@/app/_util/type";

const page = async ({
  params: { moviesid },
}: {
  params: { moviesid: string };
}) => {
  //   const data = await response(`/movie/${movieid}?language=en-US`);
  return (
    <div>
      {/* {data.map((movie: Movietype, index: number) => {
        return <div key={index}>{moviesid}</div>;
      })} */}
    </div>
  );
};
export default page;
