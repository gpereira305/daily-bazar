import React from "react";
import { formatPrice, generateAmountOptions } from "../utils";
import { useDispatch } from "react-redux";
import { removeItem, editItem } from "../features/cart/cartSlice";

export default function CartItem({ cartItem }) {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const removeItemFromTheCart = () => {
    if (window.confirm("Tem certeza que deseja remover o item do carrinho?")) {
      dispatch(removeItem({ cartID }));
    }
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  return (
    <li
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row gap-5 flex-wrap border-b border-base-300 bg-base-200 last:border-b-0 p-2 rounded-sm"
    >
      <figure className="w-full h-[40dvh] rounded-sm sm:w-[220px] sm:h-[220px] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-[inherit] h-[inherit] object-cover  sm:w-[inherit] sm:h-[inherit]"
        />
      </figure>
      <section className="h-full">
        <h2 className="text-2xl card-title capitalize tracking-wider mb-1">
          {title}
        </h2>
        <h3 className="text-lg font-semibold text-neutral-content mb-2">
          {company}
        </h3>
        <h4 className="my-2 text-base font-bold flex items-center gap-x-2">
          Cor:
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </h4>

        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text text-base font-bold mb-1">Qtd:</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="select select-bordered max-w-[100px]"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>

        <p className="text-lg font-semibold mt-4">
          <span>{formatPrice(price)}</span> a unidade
        </p>
      </section>
      <button
        className="btn btn-primary sm:ml-auto"
        onClick={removeItemFromTheCart}
      >
        Remover
      </button>
    </li>
  );
}
