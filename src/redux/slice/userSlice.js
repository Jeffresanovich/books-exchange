import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  user: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    clearUser: (state) => {
      state.id = null;
      state.user = {};
    },
  },
});

export const { setUserId, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
