import { createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  HomeLayout,
  Landing,
  Login,
  NotFound,
  Orders,
  Product,
  Products,
  Register,
} from "../pages";
import { ErrorUIElement } from "../components";
import { loader as landingLoader } from "../pages/Landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorUIElement />,
        loader: landingLoader,
      },
      {
        path: "produtos",
        element: <Products />,
      },
      {
        path: "produtos/:id",
        element: <Product />,
      },
      {
        path: "carrinho",
        element: <Cart />,
      },
      {
        path: "sobre-nos",
        element: <About />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
      {
        path: "pedidos",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/cadastro",
    element: <Register />,
    errorElement: <NotFound />,
  },
]);
