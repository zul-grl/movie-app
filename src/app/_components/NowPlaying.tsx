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
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

const NowPlaying = () => {
  const [movies, setMovies] = useState<Movietype[] | undefined>([]);
  const [videoKeys, setVideoKeys] = useState<{ [key: number]: string }>({});

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await response("/movie/now_playing?language=en-US&page=1");
      setMovies(data.results);

      const keys: { [key: number]: string } = {};
      for (const movie of data.results) {
        const videos = await response(`/movie/${movie.id}/videos?language=en-US`);
        if (videos.results.length > 0) {
          keys[movie.id] = videos.results[0].key;
        }
      }
      setVideoKeys(keys);
    };

    fetchMovies();
  }, []);

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
      <CarouselContent className="h-[600px] w-[100vw]">
        {movies?.map((movie, index) => (
          <CarouselItem key={index}>
            <Link href={`/details/${movie.id}`}>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                width={10000}
                height={1000}
                alt=""
                className="relative w-full"
              />
            </Link>
            <div className="w-[404px] h-[264px] text-white flex gap-4 flex-col absolute left-[140px] bottom-[158px]">
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
              <div className="h-[93px] overflow-hidden">{movie.overview}</div>
              <Dialog>
                <DialogTrigger>
                  <div className="text-primary flex bg-secondary py-2 gap-2 rounded-xl px-4 w-[170px]">
                    <Play />
                    Watch Trailer
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoKeys[movie.id]}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <DialogHeader>
                    <DialogTitle></DialogTitle>
                    <DialogDescription>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default NowPlaying;