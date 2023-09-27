import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navigation: null,
};

const routingSlice = createSlice({
  name: "routing",
  initialState,
  reducers: {
    setNavigation: (state, action) => {
      state.navigation = action.payload;
    },
  },
});

export const { setNavigation } = routingSlice.actions;

export default routingSlice.reducer;
