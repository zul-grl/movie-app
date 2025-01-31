"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import SearchPage from "./SearchResult";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Search = () => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Input
          type="text"
          placeholder="Search movies..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            setOpen(e.target.value.length > 0);
          }}
          onFocus={() => setOpen(true)}
        />
      </PopoverTrigger>
      {open && searchValue.length > 0 && (
        <PopoverContent
          className="flex flex-col w-[550px] bg-background border rounded-md h-[670px] p-3"
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          <SearchPage searchValue={searchValue} />
        </PopoverContent>
      )}
    </Popover>
  );
};

export default Search;
