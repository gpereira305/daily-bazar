import React from "react";
import ReactDOM from "react-dom/client";
import { store } from "./store.js";
import { Provider } from "react-redux";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import "./index.css";

const toastifyProps = {
  position: "top-center",
  autoClose: 2500,
  newestOnTop: true,
  theme: "dark",
  transition: Zoom,
  pauseOnHover: false,
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer {...toastifyProps} />
  </React.StrictMode>
);
