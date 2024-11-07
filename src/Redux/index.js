import { configureStore } from "@reduxjs/toolkit";
import { homereducer } from "./slice/homeSlice";

const store = configureStore({
    reducer:{
        home: homereducer
    }
})

export default store