import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navigation: {},
};

const routingSlice = createSlice({
  name: "routing",
  initialState,
  reducers: {
    setDrawerNavigation: (state, action) => {
      state.navigation = action.payload;
    },
  },
});

export const { setDrawerNavigation } = routingSlice.actions;

export default routingSlice.reducer;
