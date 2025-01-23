import { Card, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Movietype } from "../_util/type";
import Link from "next/link";
export const MovieCard = ({
  movie,
  index,
}: {
  movie: Movietype;
  index: number;
}) => {
  return (
    <Link href={`/details${movie.id}`}>
      <Card
        key={index}
        className="flex-1 hover:opacity-50 transition-all ease-in rounded-xl overflow-hidden"
      >
        <div className="h-[340px] overflow-hidden">
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={1000}
            height={1000}
            className="w-full h-full object-cover"
          />
        </div>

        <CardContent className="p-2 h-[85px] bg-secondary">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={17}
              fill="none"
            >
              <path
                fill="#FDE047"
                stroke="#FDE047"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8 1.433 2.06 4.174 4.607.673-3.334 3.247.787 4.586L8 11.947l-4.12 2.166.787-4.586L1.333 6.28l4.607-.673L8 1.433Z"
              />
            </svg>
            <p className="text-sm font-medium">
              {movie.vote_average.toFixed(1)}
              <span className="text-muted-foreground">/10</span>
            </p>
          </div>
          <CardTitle className="text-lg">{movie.title}</CardTitle>
        </CardContent>
      </Card>
    </Link>
  );
};
