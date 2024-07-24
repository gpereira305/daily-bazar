import React from "react";
import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils";
import {
  AdvancedPaginationContainer,
  OrderList,
  SectionTitle,
} from "../components";

const ordersQuery = (params, user) => {
  return {
    queryKey: [
      "orders",
      user.username,
      params.page ? parseInt(params.page) : 1,
    ],
    queryFn: () =>
      customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }),
  };
};

export const loader =
  (store, queryClient) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warning("Você tem que estar logado para visualizar seus pedidos!");
      return redirect("/login");
    }

    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    try {
      const response = await queryClient.ensureQueryData(
        ordersQuery(params, user)
      );

      return { orders: response?.data?.data, meta: response?.data?.meta };
    } catch (error) {
      console.log(error);
      toast.error(
        error?.response?.data?.error?.message ||
          "Confira suas credenciais e tente novamente."
      );
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        return redirect("/login");
      }
      return null;
    }

    return null;
  };
export default function Orders() {
  const { meta } = useLoaderData();

  if (meta?.pagination?.total < 1) {
    return <SectionTitle text="Adicione pedidos ao seu carrinho" />;
  }

  return (
    <div className="mt-16">
      <SectionTitle text="Seus pedidos" />

      <section className="main-container mt-10">
        <OrderList />
      </section>
      <AdvancedPaginationContainer />
    </div>
  );
}
