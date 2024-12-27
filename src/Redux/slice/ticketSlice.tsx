import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moviedata: null, // Add moviedata to your state
};

const ticketSlice = createSlice({
  name: "ticket",
  initialState,
  reducers: {
    setMovieData: (state, action) => {
      state.moviedata = action.payload;
    },
    clearAuthState: (state) => {
      state.moviedata = null; // Clear moviedata on logout
    },
  },
});

export const { setMovieData, clearAuthState } = ticketSlice.actions;
export const ticketreducer = ticketSlice.reducer;
