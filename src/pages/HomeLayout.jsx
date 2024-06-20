import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Loading } from "../components";

export default function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <>
      <Header />

      <main>{isPageLoading ? <Loading /> : <Outlet />}</main>
    </>
  );
}
