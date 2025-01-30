"use client";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import SearchPage from "./SearchResult";
import { useSearchParams } from "next/navigation";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Search = () => {
  const searchParams = useSearchParams();
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const search = searchParams.get("value");

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Input
            type="text"
            placeholder="Search movies..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setOpen(true)}
            onBlur={() => setOpen(false)}
          />
        </PopoverTrigger>

        {searchValue.length > 0 && (
          <PopoverContent className="flex flex-col w-[577px] bg-background border rounded-md h-[705px] p-3">
            <SearchPage searchValue={searchValue} />
          </PopoverContent>
        )}
      </Popover>
    </>
  );
};

export default Search;
