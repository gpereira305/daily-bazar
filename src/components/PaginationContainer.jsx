import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

export default function PaginationContainer() {
  const { info } = useLoaderData();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { pageCount, page } = info?.pagination || {};

  if (!pageCount || pageCount < 2) return null;
  const handlePageChange = (pageNumber) => {
    navigate(`${pathname}?page=${pageNumber}`);
  };

  const pageButtons = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  return (
    <div className="main-container mt-16 join w-full flex sm:justify-end justify-center flex-wrap sm:flex-nowrap">
      <button
        className={`btn btn-md join-item ${
          page === 1 ? "disabled:opacity-95 hover:cursor-not-allowed" : ""
        }`}
        onClick={() => handlePageChange((page - 1 + pageCount) % pageCount)}
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
        onClick={() => handlePageChange((page + 1) % pageCount)}
        disabled={page === pageCount}
      >
        Próximo
      </button>
    </div>
  );
}
