"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Moon, Search, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { GenreType } from "../_util/type";
import response from "../_util/response";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const [genres, setGenres] = useState<GenreType[] | undefined>([]);
  useEffect(() => {
    const fetchGenres = async () => {
      const data = await response("/genre/movie/list?language=en");
      setGenres(data.genres);
    };
    fetchGenres();
  }, []);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <Card className="flex w-[100vw] justify-center h-[59px] sticky top-0 z-10">
      <div className="max-w-[1280px] w-[100%] flex items-center justify-between">
        <div className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M5.83366 2.1665V18.8332M14.167 2.1665V18.8332M1.66699 10.4998H18.3337M1.66699 6.33317H5.83366M1.66699 14.6665H5.83366M14.167 14.6665H18.3337M14.167 6.33317H18.3337M3.48366 2.1665H16.517C17.5203 2.1665 18.3337 2.97985 18.3337 3.98317V17.0165C18.3337 18.0198 17.5203 18.8332 16.517 18.8332H3.48366C2.48034 18.8332 1.66699 18.0198 1.66699 17.0165V3.98317C1.66699 2.97985 2.48034 2.1665 3.48366 2.1665Z"
              stroke="#4338CA"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <h4 className="italic font-bold text-[#4338CA]">Movie Z</h4>
        </div>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <ChevronDown />
                Genre
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* {genres?.map((genre) => (
                <DropdownMenuItem key={genre.id}>{genre.name}</DropdownMenuItem>
              ))} */}
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="flex items-center">
            <Input></Input>
          </div>
        </div>
        <Button onClick={toggleTheme} variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </div>
    </Card>
  );
};
export default Header;
