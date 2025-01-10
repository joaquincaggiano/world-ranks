import Link from "next/link";
import React from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

interface Props {
  currentPage: number;
  totalPages: number;
  search: string;
}

const Pagination = ({ currentPage, totalPages, search }: Props) => {
  const generatePaginationNumbers = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 2) {
        pages.push(1, 2, 3, "...", totalPages);
      } else if (currentPage >= totalPages - 1) {
        pages.push(1, "...", totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      <Link
        href={`?search=${search}&page=${currentPage - 1}`}
        className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
          currentPage === 1 ? "pointer-events-none opacity-50" : ""
        }`}
        aria-disabled={currentPage === 1}
      >
        <ArrowLeft />
      </Link>

      {generatePaginationNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="px-4 py-2">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={`?search=${search}&page=${page}`}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentPage === page
                ? "bg-gray-900 text-white"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </Link>
        )
      )}

      <Link
        href={`?search=${search}&page=${currentPage + 1}`}
        className={`p-2 rounded-lg hover:bg-gray-100 transition-colors ${
          currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        }`}
        aria-disabled={currentPage === totalPages}
      >
        <ArrowRight />
      </Link>
    </div>
  );
};

export default Pagination;
