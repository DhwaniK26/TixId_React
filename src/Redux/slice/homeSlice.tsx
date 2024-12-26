import { createSlice } from "@reduxjs/toolkit";

interface HomeSlice {
  selectedMovie: any;
  selected: boolean;
}

const initialState: HomeSlice = {
  selectedMovie: {},
  selected: false,
};

const homeSlice = createSlice({
  name: "home",
  // initialState: {
  //   selectedMovie: {},
  //   selected: false,
  // },
  initialState,
  reducers: {
    setmovie(state, action) {
      state.selectedMovie = action.payload;
      state.selected = true;
    },
  },
});

export const { setmovie } = homeSlice.actions;
export const homereducer = homeSlice.reducer;
