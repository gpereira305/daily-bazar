import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";

export default function CartItemsList() {
  const cartItems = useSelector((state) => state.cartState.cartItems);

  return (
    <ul className="lg:col-span-8">
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </ul>
  );
}
