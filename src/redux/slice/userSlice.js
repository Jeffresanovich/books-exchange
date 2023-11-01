import { createSlice } from "@reduxjs/toolkit";

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
      const convertArray = [];
      for (const key in action.payload) {
        convertArray.push({ ...action.payload[key], key });
      }
      state.user = convertArray[0];
    },

    clearUser: (state) => {
      state.id = null;
      state.user = {};
    },
  },
});

export const { setUserId, setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
