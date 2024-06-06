import React from "react";
import { Link, useRouteError } from "react-router-dom";

export default function NotFound() {
  const error = useRouteError();

  return (
    <main className="grid min-h-screen place-items-center px-8">
      <div className="flex flex-col gap-5">
        {error.status === 404 && (
          <h1 className="text-center font-bold text-9xl text-red-800">404</h1>
        )}
        <h2 className="text-center font-semibold text-4xl">
          Ocorreu um erro...
        </h2>
        <p className="text-center font-normal text-xl mb-8">
          A página que você procura não existe
        </p>

        <Link className="btn btn-primary uppercase text-black" to="/">
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
