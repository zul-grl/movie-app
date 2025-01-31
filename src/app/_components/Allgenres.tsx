"use client";
import { Toggle } from "@radix-ui/react-toggle";
import { GenreType } from "../_util/type";
import { ChevronRight } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Allgenres = ({ genreMovies }: { genreMovies: GenreType[] }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [selectedGenres, setSelectedGenres] = useState<number[]>([]);

  useEffect(() => {
    const genres = searchParams.get("genres");
    if (genres) {
      setSelectedGenres(genres.split(",").map(Number));
    } else {
      setSelectedGenres([]);
    }
  }, [searchParams]);

  const handleGenreToggle = (genreId: number) => {
    let newSelectedGenres: number[];

    if (selectedGenres.includes(genreId)) {
      newSelectedGenres = selectedGenres.filter((id) => id !== genreId);
    } else {
      newSelectedGenres = [...selectedGenres, genreId];
    }

    const params = new URLSearchParams(searchParams.toString());
    if (newSelectedGenres.length > 0) {
      params.set("genres", newSelectedGenres.join(","));
    } else {
      params.delete("genres");
    }
    router.push(`/genres?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3.5">
        {genreMovies?.map((genre: GenreType) => (
          <Toggle
            key={genre.id}
            onPressedChange={() => handleGenreToggle(genre.id)}
            className={`flex text-sm rounded-full border items-center px-2 py-1 transition-colors
              ${
                selectedGenres.includes(genre.id)
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-[#27272A] hover:bg-accent"
              }`}
          >
            {genre.name}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Toggle>
        ))}
      </div>
    </div>
  );
};

export default Allgenres;
