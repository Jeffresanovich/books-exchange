import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

//Sleces
import bookSlice from "./slice/bookSlice";
import authSlice from "./slice/authSlice";

//Services
import { bookApi } from "../services/bookApi";

export const store = configureStore({
  reducer: {
    bookSlice,
    authSlice,
    [bookApi.reducerPath]: bookApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

setupListeners(store.dispatch);

export default store;
