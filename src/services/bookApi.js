import { base_url } from "../firebase/realTimeDBFirebase";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `books.json`,
    }),
  }),
});

export const { useGetAllBooksQuery } = bookApi; //EndPint en forma de HOOK: use...
