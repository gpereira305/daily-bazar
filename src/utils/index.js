import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

// format price to BRL
export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};
