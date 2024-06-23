import { nanoid } from "@reduxjs/toolkit";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavLinks() {
  const navlinks = [
    { path: "/", name: "Home" },
    { path: "/sobre-nos", name: "Sobre nós" },
    { path: "/products", name: "Produtos" },
    { path: "/checkout", name: "Checkout" },
    { path: "/pedidos", name: "Pedidos" },
    { path: "/carrinho", name: "Carrinho" },
  ];

  return (
    <>
      {navlinks.map(({ path, name }) => (
        <li key={path}>
          <NavLink className="nav-link uppercase" to={path}>
            {name}
          </NavLink>
        </li>
      ))}
    </>
  );
}
