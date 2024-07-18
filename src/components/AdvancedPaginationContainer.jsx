import React from "react";
import { useLoaderData, useLocation, useNavigate } from "react-router-dom";

export default function AdvancedPaginationContainer() {
  const { meta } = useLoaderData();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { pageCount, page } = meta?.pagination || {};

  if (!pageCount || pageCount < 2) return null;
  const handlePageChange = (pageNumber) => {
    navigate(`${pathname}?page=${pageNumber}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? "bg-base-300 border-base-300" : ""
        }`}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));

    if (page > 2) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-1">
          ...
        </button>
      );
    }

    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }

    if (page < pageCount - 1) {
      pageButtons.push(
        <button className="join-item btn btn-xs sm:btn-md" key="dots-2">
          ...
        </button>
      );
    }

    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );

    return pageButtons;
  };

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

      {renderPageButtons()}

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
