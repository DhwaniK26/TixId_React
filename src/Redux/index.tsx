import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { homereducer } from "./slice/homeSlice";
import { chooseSchreducer } from "./slice/chooseSchSlice";
import { seatsreducer } from "./slice/seatsSlice";
import { restreducer } from "./slice/restStateSlice";
import { authreducer } from "./slice/authSlice";
import { paymentreducer } from "./slice/paymentSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// const store = configureStore({
//   reducer: {
//     home: homereducer,
//     chooseSch: chooseSchreducer,
//     seats: seatsreducer,
//     rest: restreducer,
//     signup: authreducer,
//   },
// });

// export default store;

const persistConfig = {
  key: "root", // Root key for your persisted state
  storage, // Specifies the storage (localStorage or sessionStorage)
  whitelist: ["home", "chooseSch", "rest", "signup", "seats", "payment"], // Example: persist these slices
};

const rootReducer = combineReducers({
  home: homereducer,
  chooseSch: chooseSchreducer,
  seats: seatsreducer,
  rest: restreducer,
  signup: authreducer,
  payment: paymentreducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);
export { store, persistor };
