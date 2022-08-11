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
          "--primary": `${Settings.colors.secondary}`,
          "--back": `${Settings.colors.black}`,
          "--text": `${Settings.colors.textsecondary}`,
          "--shadowTitle": `${Settings.colors.shadowTitleDark}`,
          "--shadowSide": `${Settings.colors.shadowsideNight}`,
          "--shadowContainerLogo": `${Settings.colors.containerLogoShadowNight}`,
          "--containerLogo": `${Settings.colors.containerLogoNight}`,
          "--LogoFill": `${Settings.colors.fillLogoNight}`,
        };
      } else if (action.payload === "darkTheme") {
        state.theme = {
          "--primary": `${Settings.colors.primary}`,
          "--back": `${Settings.colors.white}`,
          "--text": `${Settings.colors.textprimary}`,
          "--shadowTitle": `${Settings.colors.shadowTitleDay}`,
          "--shadowSide": `${Settings.colors.shadowsideDay}`,
          "--shadowContainerLogo": `${Settings.colors.containerLogoShadowDay}`,
          "--containerLogo": `${Settings.colors.containerLogoDay}`,
          "--LogoFill": `${Settings.colors.fillLogoDay}`,
        };
      }
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export default themeSlice.reducer;
