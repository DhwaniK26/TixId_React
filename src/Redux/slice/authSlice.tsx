import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupData {
  username: string;
  phonenumber: string;
}

const initialState: SignupData = {
  username: "",
  phonenumber: "",
};

const authSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setdata(state: any, action: PayloadAction<SignupData>) {
      state.username = action.payload.username;
      state.phonenumber = action.payload.phonenumber;
    },
  },
});

export const { setdata } = authSlice.actions;
export const authreducer = authSlice.reducer;
