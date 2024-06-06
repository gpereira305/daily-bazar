import React from "react";
import { Form, Link } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";

export default function Login() {
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="email"
          name="identifier"
          defaultValue="test@test.com"
        />

        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue="secret"
        />

        <div className="mt-4">
          <SubmitButton text="Login" />
        </div>
        <button type="button" className="btn btn-secondary btn-link">
          Entrar como convidado
        </button>

        <p className="text-center">
          Não tem cadastro?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            Cadastra-se
          </Link>
        </p>
      </Form>
    </div>
  );
}
