import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components";

export default function HomeLayout() {
  return (
    <>
      <Header />

      <main className=" ">
        <Outlet />
      </main>
    </>
  );
}
