import response from "../_util/response";
import { Movietype } from "../_util/type";
import { Card } from "./Card";

const Popular = async () => {
  const data = await response("/movie/popular?language=en-US&page=1");
  return (
    <div className="grid grid-cols-5 gap-3">
      {data.results?.map((movie: Movietype, index: number) => {
        return <Card movie={movie} index={index} />;
      })}
    </div>
  );
};
export default Popular;
