import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../components/SectionTitle";
import { CartItemsList, CartTotals } from "../components";
import { Link } from "react-router-dom";

export default function Cart() {
  const user = null;
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <div className="pt-16">
      <SectionTitle
        text={`${numItemsInCart === 0 ? "Carrinho vazio" : "carrinho"}`}
      />
      <div className="main-container mt-8 grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList />
        </div>
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
    </div>
  );
}
