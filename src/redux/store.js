import { configureStore } from "@reduxjs/toolkit";

import bookSlice from "./slice/bookSlice";
import userSlice from "./slice/userSlice";

export const store = configureStore({
  reducer: { bookSlice, userSlice },
});
