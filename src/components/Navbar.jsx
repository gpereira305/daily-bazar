import React from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsFillCartFill } from "react-icons/bs";
// import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
// import { useTheme } from "../hooks/useTheme";
// import { useCart } from "../hooks/useCart";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* Title */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-3xl items-center"
          >
            DB
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52 gap-y-4"
            >
              <NavLinks />
            </ul>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-x-4">
            <NavLinks />
          </ul>
        </div>

        <div className="navbar-end">
          <div className="flex gap-x-4">
            {/* <ThemeIcon /> */}
            {/* <CartIcon /> */}
            <NavLink
              to={"/carrinho"}
              className="btn btn-ghost btn-circle btn-md ml-4"
            >
              <div className="indicator">
                <BsCart3 className="h-6 w-6" />
                <span className="badge badge-sm badge-primary indicator-item">
                  0
                </span>
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
