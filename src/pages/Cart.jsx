import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import { CartItemsList, CartTotals } from "../components";
import { Link } from "react-router-dom";

export default function Cart() {
  const user = useSelector((state) => state.userState.user);
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return numItemsInCart === 0 ? (
    <div className="main-container flex flex-col justify-center items-center mt-8 min-h-[50dvh]">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Seu carrinho está vazio
      </h1>
      <Link className="btn btn-primary btn-block mt-2 max-w-max" to="/products">
        Continue comprando
      </Link>
    </div>
  ) : (
    <div
      className="main-container mt-8 grid gap-8 lg:grid-cols-12"
      style={{ paddingTop: "6rem" }}
    >
      <CartItemsList />

      <div className="lg:col-span-4 lg:pl-4">
        <CartTotals />
        {user ? (
          <Link to="/checkout" className="btn btn-primary btn-block mt-8">
            Ir para o checkout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-primary btn-block mt-8">
            Faça o login
          </Link>
        )}
      </div>
    </div>
  );
}
