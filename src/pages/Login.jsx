import React from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitButton } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("Login efetuado com sucesso!");
      return redirect("/");
    } catch (error) {
      toast.error(
        error?.response?.data?.error?.message ||
          "Confira suas credenciais e tente novamente."
      );
      return null;
    }
  };

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsAGuest = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "test@test.com",
        password: "secret",
      });

      dispatch(loginUser(response.data));
      toast.success("Login de usuário convidado feito com sucesso!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Erro ao logar. Tente novamente!");
    }
  };

  return (
    <div className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">Login</h4>
        <FormInput
          type="email"
          label="Email"
          name="identifier"
          placeholder={"Seu e-mail"}
        />

        <FormInput
          type="password"
          label="Senha"
          name="password"
          placeholder={"Sua senha"}
        />

        <div className="mt-4">
          <SubmitButton text="Login" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-link"
          onClick={loginAsAGuest}
        >
          Entrar como convidado
        </button>

        <p className="text-center">
          Não tem cadastro?
          <Link to="/cadastro" className="ml-2 link link-hover link-primary">
            Cadastre-se
          </Link>
        </p>
      </Form>
    </div>
  );
}
