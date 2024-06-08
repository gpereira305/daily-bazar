import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="py-2 px-8">
      <div className="align-element flex justify-center sm:justify-end">
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
