"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

interface CustomPaginationProps {
  page: number;
  totalPages: number;
}

const CustomPagination = ({ page, totalPages }: CustomPaginationProps) => {
  const searchParams = useSearchParams();

  const getUpdatedHref = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    return `?${params.toString()}`;
  };

  const getPageNumbers = (current: number, total: number) => {
    let pages = [];
    for (let i = 0; i < 3; i++) {
      if (current + i <= total) pages.push(current + i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers(page, totalPages);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getUpdatedHref(Math.max(1, page - 1))}
            className={page === 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink href={getUpdatedHref(pageNumber)}>
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href={getUpdatedHref(Math.min(totalPages, page + 1))}
            className={
              page + 2 > totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
