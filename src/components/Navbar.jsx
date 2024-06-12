import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import NavLinks from "./NavLinks";

const themes = {
  corporate: "corporate",
  business: "business",
};

const getSavedTheme = () => localStorage.getItem("theme") || themes.corporate;

export default function Navbar() {
  const [theme, setTheme] = useState(getSavedTheme());

  const handleTheme = () => {
    const { corporate, business } = themes;
    const newTheme = theme === corporate ? business : corporate;
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="bg-base-200">
      <div className="main-container navbar">
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
            <label tabIndex={0} className="btn btn-ghost lg:hidden p-0">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 sm:z-[1] z-[1000] p-2 shadow bg-base-200 rounded-box w-52 gap-y-4"
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
          <div className="flex gap-x-2">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onChange={handleTheme}
                className="hidden"
              />

              <BsSunFill className="swap-on h-4 w-4" />
              <BsMoonFill className="swap-off h-4 w-4" />
            </label>

            {/* <CartIcon /> */}
            <NavLink
              to={"/carrinho"}
              className="btn btn-ghost btn-circle btn-md"
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
