import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await customFetch.post("/auth/local/register", data);
    toast.success("Conta criada com sucesso!");
    return redirect("/login");
  } catch (error) {
    toast.error(
      error?.response?.data?.error?.message ||
        "Confira suas credenciais e tente novamente."
    );

    return null;
  }

  return response.data;
};

export default function Register() {
  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Cadastrar</h4>
        <FormInput type="text" label="Seu nome" name="username" />
        <FormInput type="email" label="Seu e-mail" name="email" />
        <FormInput type="password" label="Sua senha" name="password" />

        <div className="mt-4">
          <SubmitButton text="Cadastrar" />
        </div>

        <p className="text-center">
          Ja possui uma conta?{" "}
          <Link className="link link-hover link-primary" to="/login">
            Entrar
          </Link>
        </p>
      </Form>
    </div>
  );
}
