import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Settings from "../../utils/settings.json";
const initialState = {
  theme: {},
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<string>) {
      console.log(state);
      console.log(action);
      if (action.payload === "lightTheme") {
        state.theme = {
          "--primary": `${Settings.colors.primary}`,
          "--back": `${Settings.colors.white}`,
        };
      } else if (action.payload === "darkTheme") {
        state.theme = {
          "--primary": `${Settings.colors.secondary}`,
          "--back": `${Settings.colors.black}`,
        };
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
