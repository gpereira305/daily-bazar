import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";
export const loader = async ({ req }) => {
  const res = await customFetch(url);
  const products = res.data.data;
  const info = res.data.meta;
  return {
    products,
    info,
  };
};

export default function Products() {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
}
