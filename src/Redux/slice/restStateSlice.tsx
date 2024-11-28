import { createSlice } from "@reduxjs/toolkit";

interface SeatType {
  paymentSelect: boolean;
  successSelect: boolean;
}

const initialState: SeatType = {
  paymentSelect: false,
  successSelect: false,
};

const restSlice = createSlice({
  name: "rest",
  initialState,
  reducers: {
    setpaytrue(state, action) {
      state.paymentSelect = action.payload;
    },
    setsuctrue(state, action) {
      state.successSelect = action.payload;
    },
  },
});

export const { setpaytrue, setsuctrue } = restSlice.actions;
export const restreducer = restSlice.reducer;
