import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

export default function Filters() {
  const { info, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;

  return (
    <Form className="max-w-[1440px] mx-auto grid bg-base-200 rounded-md gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center text-center w-full py-8 px-8 my-8 sm:my-14">
      <FormInput
        type="search"
        label="Pesquisar produto"
        name="search"
        size={"input-sm"}
        defaultValue={search}
      />

      <FormSelect
        label="Selecionar a categoria"
        name="category"
        list={info?.categories}
        size={"select-sm"}
        defaultValue={category}
      />

      <FormSelect
        label="Selecionar a fabricante"
        name="company"
        list={info?.companies}
        size={"select-sm"}
        defaultValue={company}
      />

      <FormSelect
        label="Ordernar por"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size={"select-sm"}
        defaultValue={order}
      />

      <FormRange
        label="Selecionar preço"
        name="price"
        size={"range-sm"}
        min={0}
        max={100000}
        price={price}
      />

      <FormCheckbox
        label="Frete grátis"
        name="shipping"
        size={"checkbox-sm"}
        defaultValue={shipping}
      />

      <button className="btn btn-primary btn-sm" type="submit">
        <FiSearch />
        Buscar
      </button>

      <Link to="/produtos" className="btn btn-primary btn-sm">
        <RxCross2 />
        Limpar filtros
      </Link>
    </Form>
  );
}
