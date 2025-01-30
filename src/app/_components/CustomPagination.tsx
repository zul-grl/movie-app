"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
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
    const delta = 2;
    const left = current - delta;
    const right = current + delta + 1;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= left && i < right)) {
        range.push(i);
      }
    }
    for (const i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push("...");
        }
      }
      rangeWithDots.push(i);
      l = i;
    }

    return rangeWithDots;
  };

  const pageNumbers = getPageNumbers(page, totalPages);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href={getUpdatedHref(page - 1)}
            className={page <= 1 ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
        {pageNumbers.map((pageNumber, index) => (
          <PaginationItem key={index}>
            {pageNumber === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href={getUpdatedHref(Number(pageNumber))}
                isActive={page === pageNumber}
              >
                {pageNumber}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href={getUpdatedHref(page + 1)}
            className={
              page >= totalPages ? "pointer-events-none opacity-50" : ""
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default CustomPagination;
