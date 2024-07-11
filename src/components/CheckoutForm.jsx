import React from "react";
import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitButton from "./SubmitButton";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      orderTotal,
      numItemsInCart,
    };

    try {
      const response = await customFetch.post(
        "/pedidos",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success("Pedido feito com sucesso!");
      return redirect("/pedidos");
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.message ||
          "Confira suas credenciais e tente novamente."
      );
      return null;
    }
  };
export default function CheckoutForm() {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h2 className="font-medium text-2xl">Dados para envio</h2>
      <FormInput type="text" label="Seu Nome" name="name" />
      <FormInput type="text" label="Seu Endereço" name="address" />

      <div className="mt-4">
        <SubmitButton text="Finalizar pedido" />
      </div>
    </Form>
  );
}
