import React from "react";
import { useSelector } from "react-redux";
import { CartTotals, CheckoutForm, SectionTitle } from "../components";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";

export const loader = (store) => {
  const user = store.getState().userState.user;
  return user
    ? null
    : (toast.warning("Por favor, faça o login"), redirect("/login"));
};

export default function Checkout() {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <div className="mt-16">
      <SectionTitle text="Finalize seu pedido" />

      <div className="main-container grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </div>
  );
}
