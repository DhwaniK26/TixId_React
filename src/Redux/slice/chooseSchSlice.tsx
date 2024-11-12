import { createSlice } from "@reduxjs/toolkit";

interface ChooseSchType {
  date: string;
  weekday: string;
  theatreName: string;
  screenName: string;
  selecttime: {};
  money: number;
  year: number;
}

const initialState: ChooseSchType = {
  date: "",
  weekday: "",
  theatreName: "",
  screenName: " ",
  selecttime: {
    id: null,
    time: null,
  },
  money: 0,
  year: new Date().getFullYear(),
};

const chooseSchSlice = createSlice({
  name: "chooseSch",
  initialState,
  reducers: {
    setdate(state, action) {
      state.date = action.payload;
    },
    setweekday(state, action) {
      state.weekday = action.payload;
    },
    settheatrename(state, action) {
      state.theatreName = action.payload;
    },
    setsrcreenname(state, action) {
      state.screenName = action.payload;
    },
    settime(state, action) {
      state.selecttime = action.payload;
    },
    setmoney(state, action) {
      state.money = action.payload;
    },
  },
});

export const {
  setdate,
  setweekday,
  settheatrename,
  setsrcreenname,
  settime,
  setmoney,
} = chooseSchSlice.actions;
export const chooseSchreducer = chooseSchSlice.reducer;
