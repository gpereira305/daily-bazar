import React from "react";
import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch.get(url);
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
