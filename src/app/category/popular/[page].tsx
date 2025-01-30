import Popular from "@/app/_components/Popular";
import response from "@/app/_util/response";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default async function PopularPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = Number(searchParams.page) || 1;
  const data = await response(`/movie/popular?language=en-US&page=${page}`);
  const totalPages = data.total_pages;

  return (
    <>
      <Popular movies={data.results} a={false} />
      <div className="flex justify-center mt-8">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${page - 1}`}
                className={page <= 1 ? "pointer-events-none opacity-50" : ""}
              />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="?page=1" isActive={page === 1}>
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="?page=2" isActive={page === 2}>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="?page=3" isActive={page === 3}>
                3
              </PaginationLink>
            </PaginationItem>

            <PaginationItem>
              <PaginationNext
                href={`?page=${page + 1}`}
                className={
                  page >= totalPages ? "pointer-events-none opacity-50" : ""
                }
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
