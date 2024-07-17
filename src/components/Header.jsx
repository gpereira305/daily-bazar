import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { logoutUser } from "../features/user/userSlice";
import { clearCart } from "../features/cart/cartSlice";

export default function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userState = useSelector((state) => state.userState);
  const { user } = userState || {};

  const handleLogout = () => {
    dispatch(logoutUser());
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <header>
      <div className="main-container flex justify-center sm:justify-end min-h-8">
        <div className="flex gap-x-6 justify-center items-center">
          {user ? (
            <div className="flex gap-x-2 sm:gap-x-8 items-center">
              <p className="text-xs sm:text-sm">Olá, {user?.username}</p>
              <button
                className="btn btn-xs btn-outline btn-primary"
                onClick={handleLogout}
              >
                Sair
              </button>
            </div>
          ) : (
            <div className="flex gap-x-6 justify-center items-center">
              <Link to="/login" className="link link-hover text-xs sm:text-sm">
                Logar
              </Link>
              <Link
                to="/cadastro"
                className="link link-hover text-xs sm:text-sm"
              >
                Criar conta
              </Link>
            </div>
          )}
        </div>
      </div>
      <Navbar />
    </header>
  );
}
