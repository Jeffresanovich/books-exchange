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
      state.userId = null;
    },
  },
});

export const { setUserId, clearUser } = authSlice.actions;

export default authSlice.reducer;
