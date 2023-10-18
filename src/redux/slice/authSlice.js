import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: null,
};

const authSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
      state.idToken = null;
    },
  },
});

export const { setUserId, clearUser } = authSlice.actions;

export default authSlice.reducer;
