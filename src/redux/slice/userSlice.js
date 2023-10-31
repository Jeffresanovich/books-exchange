import { createSlice } from "@reduxjs/toolkit";
import useConvertDataResponse from "../../hooks/useConvertDataResponse";

const initialState = {
  id: null,
  user: {},
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },

    setUser: (state, action) => {
      state.user = useConvertDataResponse(action.payload)[0];
    },

    clearUser: (state) => {
      state.id = null;
      state.user = {};
    },
  },
});

export const { setUserId, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
