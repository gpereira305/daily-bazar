import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const navlinks = [
  { path: "/", name: "Home" },
  { path: "/sobre-nos", name: "Sobre nós" },
  { path: "/products", name: "Produtos" },
  { path: "/checkout", name: "Checkout" },
  { path: "/pedidos", name: "Pedidos" },
  { path: "/carrinho", name: "Carrinho" },
];
export default function NavLinks() {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {navlinks.map((link) => {
        const { path, name } = link;
        if (path === "/checkout" || (path === "/pedidos" && !user)) return null;
        return (
          <li key={path}>
            <NavLink className="nav-link uppercase" to={path}>
              {name}
            </NavLink>
          </li>
        );
      })}
    </>
  );
}
