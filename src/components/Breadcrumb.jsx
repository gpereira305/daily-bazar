import React from "react";
import { NavLink } from "react-router-dom";

export default function Breadcrumb() {
  const links = [
    {
      id: 1,
      url: "/",
      text: "Home",
    },
    {
      id: 2,
      url: "/products",
      text: "Produtos",
    },
  ];

  return (
    <ul className="breadcrumbs flex items-center gap-3 text-md py-0 mt-10">
      {links.map((link) => (
        <li key={link.id}>
          <NavLink className="uppercase" to={link.url}>
            {link.text}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
