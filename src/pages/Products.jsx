import React from "react";
import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";

const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const res = await customFetch(url, { params });
  const products = res.data.data;
  const meta = res.data.meta;
  return {
    products,
    meta,
    params,
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
