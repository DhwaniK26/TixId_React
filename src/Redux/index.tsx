import { configureStore } from "@reduxjs/toolkit";
import { homereducer } from "./slice/homeSlice";
import { chooseSchreducer } from "./slice/chooseSchSlice";
import { seatsreducer } from "./slice/seatsSlice";

const store = configureStore({
    reducer:{
        home: homereducer,
        chooseSch:chooseSchreducer,
        seats:seatsreducer
    }
})

export default store