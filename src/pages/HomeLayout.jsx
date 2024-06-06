import React from "react";
import { Outlet } from "react-router-dom";

export default function HomeLayout() {
  return (
    <>
      <nav>
        <div>Daily Bazar</div>
      </nav>
      <Outlet />
    </>
  );
}
