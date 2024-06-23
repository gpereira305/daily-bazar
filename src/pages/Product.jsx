import React, { useState } from "react";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useLoaderData } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import Breadcrumb from "../components/Breadcrumb";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};
export default function Product() {
  const { product } = useLoaderData();
  const { name, title, description, image, price, colors, category, company } =
    product.attributes;
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  const RealFormattedPrice = formatPrice(price);

  function handleAmout(e) {
    e.preventDefault();
    setAmount(parseInt(e.target.value));
    // setProductColor(e.target.value);
  }

  const cartproduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount,
    productColor,
    company,
  };

  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();
    dispatch(addItem({ product: cartproduct }));
  };

  return (
    <div className="main-container">
      <h1 style={{ display: "none" }}>Descrição do produto</h1>
      <Breadcrumb />

      <div className="mt-20 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <figure className="w-full h-full max-h-[35dvh] sm:max-h-[50dvh] rounded-lg">
          <img
            className="object-cover rounded-[inherit] w-[inherit] h-[inherit]"
            src={image}
            alt={name}
            title={name}
            loading="lazy"
          />
        </figure>

        <section className="w-full">
          <h2 className="uppercase text-3xl font-bold">{title}</h2>
          <div className="mt-3 mb-4">
            <h3 className="text-xl base-100 font-bold">
              Marca:{" "}
              <span className="text-base text-md font-semibold text-gray-400">
                {company}
              </span>
            </h3>
            <h3 className="text-xl base-100 font-bold">
              Categoria:
              <span className="text-base text-md font-semibold text-gray-400">
                {" "}
                {category}
              </span>
            </h3>
          </div>

          <h4 className="mt-3 text-md font-semibold">
            Por apenas:
            <br />{" "}
            <span className="font-bold text-3xl">{RealFormattedPrice}</span> à
            vista
          </h4>

          <div className="mt-6">
            <h5 className="text-xl base-100 font-bold">Colores:</h5>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge w-6 h-6 mr-2 ${
                      color === productColor && "border-2 border-secondary"
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>

            <form className="form-control w-full max-w-xs" onSubmit={addToCart}>
              <label className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  Qunatidade:
                </h4>
              </label>
              <select
                className="select select-secondary select-bordered select-md mb-5"
                value={amount}
                onChange={handleAmout}
              >
                {generateAmountOptions(10)}
              </select>

              <button className="btn btn-secondary btn-md" type="submit">
                Adicionar ao carrinho
              </button>
            </form>
          </div>

          <p className="text-sm font-normal mt-6 font-serif leading-6  text-gray-400 tracking-wider mb-8">
            {description}
          </p>
        </section>
      </div>
    </div>
  );
}
