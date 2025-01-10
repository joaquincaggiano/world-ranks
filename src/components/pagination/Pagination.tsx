"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { createQuery } from "@/utils/createQueryString";

interface Props {
  currentPage: number;
  totalPages: number;
}

const Pagination = ({ currentPage, totalPages }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const [arrowLeftColor, setArrowLeftColor] = useState("white");
  const [arrowRightColor, setArrowRightColor] = useState("gray");

  useEffect(() => {
    if (currentPage > totalPages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", "1");
      router.push(`${pathname}?${params.toString()}`);
    }
  }, [totalPages, currentPage, pathname, router, searchParams]);

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
        href={pathname + "?" + createQuery(searchParams, "page", (currentPage - 1).toString())}
        className={`${currentPage === 1 && "pointer-events-none"}`}
        aria-disabled={currentPage === 1}
        onMouseEnter={() => setArrowLeftColor("gray")}
        onMouseLeave={() => setArrowLeftColor("white")}
      >
        <ArrowLeft color={currentPage === 1 ? "gray" : arrowLeftColor} />
      </Link>

      {generatePaginationNumbers().map((page, index) =>
        page === "..." ? (
          <span key={`ellipsis-${index}`} className="p-2">
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={pathname + "?" + createQuery(searchParams, "page", page.toString())}
            className={`${
              currentPage === page ? "text-white" : "text-gray"
            } font-medium p-2 hover:text-white`}
          >
            {page}
          </Link>
        )
      )}

      <Link
        href={pathname + "?" + createQuery(searchParams, "page", (currentPage + 1).toString())}
        className={`${currentPage === totalPages && "pointer-events-none"}`}
        aria-disabled={currentPage === totalPages}
        onMouseEnter={() => setArrowRightColor("gray")}
        onMouseLeave={() => setArrowRightColor("white")}
      >
        <ArrowRight
          color={currentPage === totalPages ? "gray" : arrowRightColor}
        />
      </Link>
    </div>
  );
};

export default Pagination;
