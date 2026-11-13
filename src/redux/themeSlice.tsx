import { createSlice } from "@reduxjs/toolkit";

import type { ThemeInitialState } from "../type/themeType";
const themeData = localStorage.getItem("theme") || "light";
export const initialState: ThemeInitialState = {
  theme: themeData,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeToggle: (state) => {
      const nextTheme = state.theme === "light" ? "dark" : "light";
      state.theme = nextTheme;
      localStorage.setItem("theme", nextTheme);
    },
  },
});

export const { themeToggle } = themeSlice.actions;

export default themeSlice.reducer;
