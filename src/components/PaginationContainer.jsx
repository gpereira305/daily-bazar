import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

export default function PaginationContainer() {
  const { meta } = useLoaderData();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { pageCount, page } = meta.pagination;

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams();
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const pageButtons = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  const handleGetPreviousPage = () => {
    let prevPage = page - 1;
    if (prevPage < 1) prevPage = pageCount;
    handlePageChange(prevPage);
  };

  const handleGetNextPage = () => {
    let nextPage = page + 1;
    if (nextPage > pageCount) nextPage = 1;
    handlePageChange(nextPage);
  };

  if (!pageCount || pageCount < 2) return null;

  return (
    <div className="main-container mt-16 join w-full flex sm:justify-end justify-center flex-wrap sm:flex-nowrap">
      <button
        className={`btn btn-md join-item ${
          page === 1 ? "disabled:opacity-95 hover:cursor-not-allowed" : ""
        }`}
        onClick={handleGetPreviousPage}
        disabled={page === 1}
      >
        Anterior
      </button>

      {pageButtons.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePageChange(pageNumber)}
          className={`btn btn-md border-none join-item ${
            pageNumber === page ? "bg-base-300 border-base-300" : ""
          }`}
        >
          {pageNumber}
        </button>
      ))}

      <button
        className={`btn btn-md join-item ${
          page === pageCount
            ? "disabled:opacity-95 hover:cursor-not-allowed"
            : ""
        }`}
        onClick={handleGetNextPage}
        disabled={page === pageCount}
      >
        Próximo
      </button>
    </div>
  );
}
