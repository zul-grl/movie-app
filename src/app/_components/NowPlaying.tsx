"use client";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";
import response from "../_util/response";
import { Movietype } from "../_util/type";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import Link from "next/link";

const NowPlaying = () => {
  const [movies, setMovies] = useState<Movietype[] | undefined>([]);
  useEffect(() => {
    const fetchmovie = async () => {
      const data = await response("/movie/now_playing?language=en-US&page=1");
      setMovies(data.results);
    };
    fetchmovie();
  }, []);
  console.log(movies);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full flex justify-center"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="h-[600px] w-[100vw] ">
        {movies?.map((movie, index) => (
          <CarouselItem
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={index}
            className="relative"
          >
            <Link href={`/details/${movie.id}`}>
              <div className="w-[80%] h-[100%]">
                <div className="w-[404px] h-[264px]  text-white flex gap-4 flex-col absolute left-[140px] bottom-[158px]">
                  <p>Now Playing:</p>
                  <h1 className="text-[32px]">{movie.title}</h1>
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
                  <div className="h-[93px] overflow-hidden">
                    {movie.overview}
                  </div>
                  <Button
                    variant={"outline"}
                    className="text-primary bg-secondary py-2 px-4 w-[135px]"
                  >
                    <Play />
                    Watch Trailer
                  </Button>
                </div>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
export default NowPlaying;
