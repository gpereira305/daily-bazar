import { useMemo } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const navlinks = [
  { path: "/", name: "Home" },
  { path: "/sobre-nos", name: "Sobre nós" },
  { path: "/products", name: "Produtos" },
  { path: "/checkout", name: "Checkout" },
  { path: "/pedidos", name: "Pedidos" },
  { path: "/carrinho", name: "Carrinho" },
];

export default function NavLinks() {
  const cartCount = useSelector((state) => state.cartState.numItemsInCart || 0);
  const user = useSelector((state) => state.userState.user);

  const unavailableLinks = useMemo(
    () => new Set(["/checkout", "/pedidos"]),
    []
  );
  return (
    <>
      {navlinks.reduce((links, link) => {
        if (
          (user || !unavailableLinks.has(link.path)) &&
          (cartCount || !unavailableLinks.has(link.path))
        ) {
          links.push(
            <li key={link.path}>
              <NavLink className="nav-link uppercase" to={link.path}>
                {link.name}
              </NavLink>
            </li>
          );
        }
        return links;
      }, [])}
    </>
  );
}
