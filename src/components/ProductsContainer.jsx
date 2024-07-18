import { useState, useMemo } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

export default function PaginationContainer() {
  const loaderData = useLoaderData();
  const { meta } = loaderData || {};
  const totalProducts = meta?.pagination?.total || 0;

  const [layout, setLayout] = useState(
    totalProducts === 0 ? "list" : localStorage.getItem("layout") || "grid"
  );

  function handleLayoutChange(pattern) {
    const newLayout =
      pattern === layout ? (layout === "grid" ? "list" : "grid") : pattern;
    setLayout(newLayout);
    localStorage.setItem("layout", newLayout);
  }

  const pluralText = totalProducts > 1 ? "s" : "";

  return (
    <>
      <section
        className="main-container flex justify-between items-center border-b border-base-300"
        style={{ paddingBottom: "40px" }}
      >
        <h2 className={`text-xl sm:text-2xl font-medium tracking-wider`}>
          {totalProducts > 0
            ? `${totalProducts} Produto${pluralText}`
            : "Nenhum produto encontrado"}{" "}
        </h2>

        <div className="btn-group">
          <button
            className={`text-xl btn btn-circle btn-sm ${
              layout === "grid"
                ? "btn-primary text-primary-content"
                : "btn-ghost text-base-content"
            }`}
            onClick={() => handleLayoutChange("grid")}
            type="button"
          >
            <BsFillGridFill />
          </button>
          <button
            className={`text-xl btn btn-circle btn-sm ${
              layout === "list"
                ? "btn-primary text-primary-content"
                : "btn-ghost text-base-content"
            }`}
            onClick={() => handleLayoutChange("list")}
            type="button"
          >
            <BsList />
          </button>
        </div>
      </section>

      {totalProducts === 0 ? (
        <div className="main-container flex items-center justify-center min-h-[40dvh]">
          <h3 className="text-center text-3xl">
            Nenhum resultado encontrado...
          </h3>
        </div>
      ) : layout === "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </>
  );
}
