import { configureStore } from "@reduxjs/toolkit";

import bookSlice from "./slice/bookSlice";
import authSlice from "./slice/authSlice";
import routingSlice from "./slice/routingSlice";

export const store = configureStore({
  reducer: { bookSlice, authSlice, routingSlice },
});
