import { Movietype } from "../_util/type";

export const Card = ({ movie, index }: { movie: Movietype; index: number }) => {
  return (
    <div className="px-20" key={index}>
      <div className="w-[230px] h-[340px]">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt="movie.poster_path"
        />
      </div>

      <div className="flex">
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
        <p>{movie?.vote_average.toFixed(1)}/10</p>
      </div>
      <p>{movie?.title}</p>
    </div>
  );
};
