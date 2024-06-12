import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header>
      <div className="main-container flex justify-center sm:justify-end min-h-8">
        <div className="flex gap-x-6 justify-center items-center">
          <Link to="/login" className="link link-hover text-xs sm:text-sm">
            Entrar
          </Link>
          <Link to="/cadastro" className="link link-hover text-xs sm:text-sm">
            Criar conta
          </Link>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
