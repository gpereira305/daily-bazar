import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numItemsInCart: 0,
  cartTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartItemsFromLocalStorage = () =>
  JSON.parse(localStorage.getItem("cartItem")) || defaultState;

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartItemsFromLocalStorage,
  reducers: {
    addItem: (state, action) => {
      const { product } = action.payload;
      const item = state.cartItems.find((it) => it.cartID === product.cartID);
      if (item) {
        item.amount += product.amount;
      } else {
        // state.cartItems.push(product);
        state.cartItems.push({ ...product, amount: 1 });
      }
      state.numItemsInCart += product.amount;
      state.cartTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item adicionado ao carrinho com sucesso!");
    },
    clearCart: (state) => {
      localStorage.setItem("cartItem", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const product = state.cartItems.find((it) => it.cartID === cartID);
      state.cartItems = state.cartItems.filter((it) => it.cartID !== cartID);
      state.numItemsInCart -= product.amount;
      state.cartTotal -= product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item removido do carrinho com sucesso!");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const item = state.cartItems.find((it) => it.cartID === cartID);
      state.cartTotal += item.price - item.amount;
      state.cartTotal += item.price * (amount - item.amount);
      item.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item atualizado com sucesso!");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.cartTotal;
      state.orderTotal = state.cartTotal + +state.shipping + state.tax;
      localStorage.setItem("cartItem", JSON.stringify(state));
    },
  },
});

export const { addItem, clearCart, removeItem, editItem } = cartSlice.actions;
export default cartSlice.reducer;
