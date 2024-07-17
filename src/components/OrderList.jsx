import React from "react";
import { useLoaderData } from "react-router-dom";
import dayjs from "dayjs";

const formatdate = (date) => dayjs(date).format(`DD MMM YYYY, hh:mm`);

export default function OrderList() {
  const { orders, meta } = useLoaderData();

  return (
    <>
      <h2 className="mb-2">
        Total de pedidos: <span>{meta?.pagination?.total}</span>
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Produtos</th>
              <th>Custo</th>
              <th className="hidden sm:block">Data</th>
            </tr>
          </thead>
          <tbody>
            {orders.map(({ id, attributes }) => {
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                attributes;
              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart} unidades</td>
                  <td>{orderTotal}</td>
                  <td className="hidden sm:block">{formatdate(createdAt)}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
