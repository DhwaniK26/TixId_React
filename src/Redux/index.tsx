import { configureStore } from "@reduxjs/toolkit";
import { homereducer } from "./slice/homeSlice";
import { chooseSchreducer } from "./slice/chooseSchSlice";
import { seatsreducer } from "./slice/seatsSlice";
import { restreducer } from "./slice/restStateSlice";
import { authreducer } from "./slice/authSlice";

const store = configureStore({
  reducer: {
    home: homereducer,
    chooseSch: chooseSchreducer,
    seats: seatsreducer,
    rest: restreducer,
    signup: authreducer,
  },
});

export default store;
