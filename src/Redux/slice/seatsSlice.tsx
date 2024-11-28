import { createSlice } from "@reduxjs/toolkit";

interface SeatType {
  time2: string;
  seats: string[];
  totalprice: string;
  selected: boolean;
}

const initialState: SeatType = {
  time2: "",
  seats: [],
  totalprice: "",
  selected: false,
};

const seatsSlice = createSlice({
  name: "seats",
  initialState,
  reducers: {
    settime2(state, action) {
      state.time2 = action.payload;
    },
    setseats(state, action) {
      state.seats = action.payload;
    },
    settotalprice(state, action) {
      state.totalprice = action.payload;
    },
    settrue(state, action) {
      state.selected = action.payload;
    },
  },
});

export const { settime2, setseats, settotalprice, settrue } =
  seatsSlice.actions;
export const seatsreducer = seatsSlice.reducer;
