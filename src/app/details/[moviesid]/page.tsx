import Similar from "@/app/_components/Similar";
import { formatRuntime } from "@/app/_util/constant";
import response from "@/app/_util/response";
import { CastMember, credittype, crewtype, detailtype } from "@/app/_util/type";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Youtube from "../components/Youtube";

const page = async ({ params }: { params: { moviesid: string } }) => {
  const movieid = params.moviesid;
  const data: detailtype = await response(`/movie/${movieid}?language=en-US`);
  const credits = await response(`/movie/${movieid}/credits?language=en-US`);
  const crew: credittype[] = credits.crew;
  const cast = credits.cast;
  const similarMovies = await response(
    `/movie/${movieid}/similar?language=en-US&page=1`
  );
  const videosdata = await response(`/movie/${movieid}/videos?language=en-US`);
  const videodata = videosdata.results[0];
  const similar = similarMovies.results.slice(0, 5);
  const director = crew.find(
    (member) => member.known_for_department === "Directing"
  )?.name;
  const writers = crew
    .filter((member) => member.known_for_department === "Writing")
    .map((writer) => writer.name);
  const stars = cast.slice(0, 3).map((star: CastMember) => star.name);
  console.log(crew);

  return (
    <div>
      <div className="max-w-[1080px] py-[52px] m-auto flex flex-col">
        <div className="flex justify-between">
          <div className="mb-6">
            <h1 className="text-[36px] font-bold">{data.title}</h1>
            <p className="text-[18px]">
              {data.release_date}· PG · {formatRuntime(data.runtime)}
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  d="M13.9997 2.33325L17.6047 9.63659L25.6663 10.8149L19.833 16.4966L21.2097 24.5233L13.9997 20.7316L6.78967 24.5233L8.16634 16.4966L2.33301 10.8149L10.3947 9.63659L13.9997 2.33325Z"
                  fill="#FDE047"
                  stroke="#FDE047"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div>
                <p className="text-sm font-medium">
                  {data.vote_average.toFixed(1)}
                  <span className="text-muted-foreground">/10</span>
                </p>
                {(data.vote_count / 1000).toFixed(1)}k
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-8 w-full h-[524px] relative">
          <Image
            width={1000}
            height={1000}
            alt=""
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            className="max-w-[290px] object-cover rounded-xl"
          ></Image>
          <div>
            <Image
              width={1000}
              height={1000}
              alt=""
              src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
              className="object-cover rounded-xl h-[524px]"
            />
            <Youtube videodata={videodata} />
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="mt-6 flex gap-3">
            {data.genres.map((genre) => {
              return (
                <Badge
                  key={genre.id}
                  variant={"outline"}
                  className="text-[12px] rounded-full border border-[#27272A] py-[2px] px-2"
                >
                  {genre.name}
                </Badge>
              );
            })}
          </div>
          <p>{data.overview}</p>
          <div className="border-b flex gap-10 border-[#E4E4E7]">
            <p className="text-[16px] font-semibold">Director</p>
            <p>{director}</p>
          </div>
          <div className="border-b flex gap-10 border-[#E4E4E7]">
            <p className="text-[16px] font-semibold">Writers</p>
            <p>{writers.join(", ")}</p>
          </div>
          <div className="border-b flex gap-12 border-[#E4E4E7]">
            <p className="text-[16px] font-semibold">Stars</p>
            <p>{stars.join(", ")}</p>
          </div>
        </div>

        <div className="flex max-w-[1080px] flex-col mt-8 m-auto gap-8">
          <Similar id={params.moviesid} movies={similar} a={true} />
        </div>
      </div>
    </div>
  );
};
export default page;
