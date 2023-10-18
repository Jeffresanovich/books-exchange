import { base_url } from "../firebase/realTimeDBFirebase";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),
  endpoints: (builder) => ({
    getAllBooks: builder.query({
      query: () => `books.json`,
    }),

    //Read user
    getUserByUid: builder.query({
      query: (userId) => `users/${userId}.json`,
    }),

    //Update User
    patchUser: builder.mutation({
      query: ([userId, body]) => ({
        url: `users/${userId}.json`,
        method: "PATCH",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetUserByUidQuery,
  usePatchUserMutation,
} = bookApi; //EndPint en forma de HOOK: use...
