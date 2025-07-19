import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginStatus: false,
  userData: null,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    AuthLogin: (state, action) => {
      state.loginStatus = true;
      state.userData = action.payload;
    },
    AuthLogout: (state, action) => {
      state.AuthLogin = false;
      state.userData = null;
    },
  },
});

export const { AuthLogin, AuthLogout } = AuthSlice.actions;
export default AuthSlice.reducer;
