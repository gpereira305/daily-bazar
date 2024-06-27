import React from "react";
import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

export default function CartTotals() {
  const { cartTotal } = useSelector((state) => state.cartState || 0);

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
        {/* FRETE */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span className="font-medium">Grátis</span>
        </p>
        {/* TOTAL */}
        <p className="flex justify-between text-lg font-bold">
          <span>Total à vista:</span>
          <span>{formatPrice(cartTotal)}</span>
        </p>
      </div>
    </div>
  );
}
