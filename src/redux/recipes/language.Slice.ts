import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  language: "es",
};

const languageSlice = createSlice({
  name: "lang",
  initialState,
  reducers: {
    putLanguage(state, action: PayloadAction<string>) {
      state.language = action.payload;
    },
  },
});

export const { putLanguage } = languageSlice.actions;

export default languageSlice.reducer;
