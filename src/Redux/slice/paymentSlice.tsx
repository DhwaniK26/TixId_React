import { createSlice } from "@reduxjs/toolkit";

interface SeatType {
  totalamt: number;
  orderid: string;
}

const initialState: SeatType = {
  totalamt: 0,
  orderid: "",
};

const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    settotalamt(state, action) {
      state.totalamt = action.payload;
    },

    setorderid(state, action) {
      state.orderid = action.payload;
    },
  },
});

export const { settotalamt, setorderid } = paymentSlice.actions;
export const paymentreducer = paymentSlice.reducer;
