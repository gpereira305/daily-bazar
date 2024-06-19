import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";

export default function Filters() {
  const { info } = useLoaderData();

  return (
    <Form
      className="main-container grid bg-base-200 rounded-md gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center text-center w-full"
      style={{ paddingTop: "30px", paddingBottom: "30px" }}
    >
      <FormInput
        type="search"
        label="Pesquisar produto"
        name="search"
        size={"input-sm"}
      />

      <FormSelect
        label="Selecionar a categoria"
        name="category"
        list={info?.categories}
        size={"select-sm"}
      />

      <FormSelect
        label="Selecionar a fabricante"
        name="company"
        list={info?.companies}
        size={"select-sm"}
      />

      <FormSelect
        label="Ordernar por"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size={"select-sm"}
      />

      <button className="btn btn-primary btn-sm" type="submit">
        <FiSearch />
        Buscar
      </button>

      <Link to="/products" className="btn btn-primary btn-sm">
        <RxCross2 />
        Limpar filtros
      </Link>
    </Form>
  );
}
