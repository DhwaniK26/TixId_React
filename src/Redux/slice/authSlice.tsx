import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupData {
  username?: string;
  phonenumber?: string;
  userlogo?: string;
}

const initialState: SignupData = {
  username: "",
  phonenumber: "",
  userlogo: "",
};

const authSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setdata(state: any, action: PayloadAction<SignupData>) {
      state.username = action.payload.username;
      state.phonenumber = action.payload.phonenumber;
    },
    setuserlogo(state, action) {
      state.userlogo = action.payload;
    },
    clearAuthState(state, action) {
      state.username = action.payload;
      state.phonenumber = action.payload;
    },
  },
});

export const { setdata, setuserlogo, clearAuthState } = authSlice.actions;
export const authreducer = authSlice.reducer;
