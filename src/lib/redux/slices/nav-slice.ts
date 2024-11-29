import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "nav",
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleNav: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleNav } = navSlice.actions;
export default navSlice.reducer;
