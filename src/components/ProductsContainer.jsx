import { useState, useMemo } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { useLoaderData } from "react-router-dom";
import { BsFillGridFill, BsList } from "react-icons/bs";

export default function PaginationContainer() {
  const loaderData = useLoaderData();
  const { info } = loaderData || {};
  const totalProducts = info?.pagination?.total || 0;

  const [layout, setLayout] = useState(
    totalProducts === 0 ? "list" : localStorage.getItem("layout") || "grid"
  );

  function handleLayoutChange(pattern) {
    const newLayout =
      pattern === layout ? (layout === "grid" ? "list" : "grid") : pattern;
    setLayout(newLayout);
    localStorage.setItem("layout", newLayout);
  }

  return (
    <>
      <section
        className="main-container flex justify-between items-center border-b border-base-300"
        style={{ paddingBottom: "20px" }}
      >
        <h2
          className={`text-xl sm:text-2xl font-medium tracking-wider capitalize`}
        >
          {totalProducts} produto{totalProducts > 1 ? "s" : ""}
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
        <h3 className="text-center text-3xl">Nenhum resultado encontrado...</h3>
      ) : layout === "grid" ? (
        <ProductsGrid />
      ) : (
        <ProductsList />
      )}
    </>
  );
}
