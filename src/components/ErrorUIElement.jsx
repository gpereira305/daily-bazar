import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorUIElement() {
  const error = useRouteError();

  console.log(error);

  return (
    <div>
      <h4>{error.statusText || error.message}</h4>
    </div>
  );
}
