import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  idToken: null,
};

const routingSlice = createSlice({
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

export const { setDrawerNavigation } = routingSlice.actions;

export default routingSlice.reducer;
