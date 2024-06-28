import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  corporate: "corporate",
  business: "business",
};

const getSavedTheme = () => {
  const theme = localStorage.getItem("theme") || themes.corporate;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: { username: "Anônimo" },
  theme: getSavedTheme(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      console.log("login");
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Deslogado com sucesso!");
    },
    toggleTheme: (state) => {
      const { corporate, business } = themes;
      state.theme = state.theme === business ? corporate : business;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;
export default userSlice.reducer;
