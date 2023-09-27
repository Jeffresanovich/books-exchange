import { configureStore } from "@reduxjs/toolkit";

import bookSlice from "./slice/bookSlice";
import userSlice from "./slice/userSlice";
import routingSlice from "./slice/routingSlice";

export const store = configureStore({
  reducer: { bookSlice, userSlice, routingSlice },
});
