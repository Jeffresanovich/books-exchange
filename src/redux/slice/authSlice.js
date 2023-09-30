import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  idToken: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIdToken: (state, action) => {
      state.idToken = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.idToken = null;
    },
  },
});

export const { setUser, setIdToken, clearUser } = authSlice.actions;

export default authSlice.reducer;
