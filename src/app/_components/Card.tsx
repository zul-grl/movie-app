import Image from "next/image";
import { Movietype } from "../_util/type";

export const Card = ({ movie, index }: { movie: Movietype; index: number }) => {
  return (
    <div className=" flex-1 rounded-[8px] overflow-hidden" key={index}>
      <div className="h-[340px] overflow-hidden">
        <Image
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
          width={1000}
          height={1000}
          className="w-[100%] h-[100%] object-cover"
        />
      </div>
      <div className="bg-[#F4F4F5] w-[100%] p-2 h-[79px]">
        <div className="flex gap-[4px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={17}
            fill="none"
          >
            <g clipPath="url(#a)">
              <path
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8 1.433 2.06 4.174 4.607.673-3.334 3.247.787 4.586L8 11.947l-4.12 2.166.787-4.586L1.333 6.28l4.607-.673L8 1.433Z"
              />
            </g>
            <defs>
              <clipPath id="a">
                <path fill="#fff" d="M0 .1h16v16H0z" />
              </clipPath>
            </defs>
          </svg>
          <p className="text-[14px] font-medium">
            {movie?.vote_average.toFixed(1)}
            <span className="text-3 text-[#71717A] font-normal">/10</span>
          </p>
        </div>
        <p className="text-lg">{movie?.title}</p>
      </div>
    </div>
  );
};
