import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../utils";

export default function ProductsGrid() {
  const { products } = useLoaderData();

  return (
    <div className="main-container pt-12 grid gap-4 lg:gap-y-4 gap-y-10 md:grid-cols-2 lg:grid-cols-3 my-10">
      {products.map(({ id, attributes: { title, price, image } }) => (
        <Link
          key={id}
          to={`/products/${id}`}
          className="card w-full shadow-xl hover:shadow-2xl transition duration-300 "
        >
          <figure className="px-4 min-h-[320px]">
            <img
              src={image}
              alt={title}
              className="rounded-md h-64 md:h-48 w-full object-cover min-h-[inherit]"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title capitalize tracking-wider">{title}</h2>
            <span className="text-secondary">{formatPrice(price)}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
