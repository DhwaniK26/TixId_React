import { createSlice } from "@reduxjs/toolkit";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    selectedMovie: {},
    selected: false,
  },
  reducers: {
    setmovie(state, action) {
      state.selectedMovie = action.payload;
      state.selected = true;
    },
  },
});

export const { setmovie } = homeSlice.actions;
export const homereducer = homeSlice.reducer;
