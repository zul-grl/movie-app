"use client";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay"
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

const NowPlaying = () => {
  const [movies, setMovies] = useState<Movietype[] | undefined>([]);
  useEffect(() => {
    const fetchmovie = async () => {
      const data = await response("/movie/now_playing?language=en-US&page=1");
      setMovies(data.results);
    };
    fetchmovie();
  }, []);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
 
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
};
export default NowPlaying;
{/* <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {movies?.map((movie, index) => (
          <CarouselItem
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            key={index}
            className="h-[600px] w-[100%] "
          >
            <CardContent className="flex"></CardContent>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel> */}