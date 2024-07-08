import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  corporate: "corporate",
  business: "business",
};

const getSavedUser = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const getSavedTheme = () => {
  const theme = localStorage.getItem("theme");
  if (theme) {
    document.documentElement.setAttribute("data-theme", theme);
    return theme;
  }
  document.documentElement.setAttribute("data-theme", themes.corporate);
  return themes.corporate;
};

const initialState = {
  user: getSavedUser(),
  theme: getSavedTheme(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
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
