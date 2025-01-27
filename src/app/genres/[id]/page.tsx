import Genre from "@/app/_components/Genres";
import response from "@/app/_util/response";

const GenrePage = async ({ params }: { params: { id: string } }) => {
  const genreid = params.id;
  //   const data = await response(
  //     ` /discover/movie?language=en&with_genres=${genreid}&page=1`
  //   );
  //   console.log(data);
  return (
    <div>
      <h1>Search Filter</h1>
      <Genre />
    </div>
  );
};
export default GenrePage;
