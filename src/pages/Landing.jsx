import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

const featuredProductsQuery = {
  queryKey: ["featuredProducts"],
  queryFn: () => customFetch(url),
  refetchOnWindowFocus: false,
  staleTime: 1000 * 60 * 5,
};

export const loader = (queryClient) => async () => {
  const response = await queryClient.fetchQuery(featuredProductsQuery);
  const products = response.data.data;
  return { products };
};

export default function Landing() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
}
