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
    getUserById: builder.query({
      query: (authUid) => `userss/${authUid}.json`,
    }),

    //Create user
    patchNewUser: builder.mutation({
      query: (body) => ({
        url: `userss.json`,
        method: "PATCH",
        body: `{"casa":${body}}`,
      }),
    }),

    //Update User Data
    patchUser: builder.mutation({
      query: ([authUid, body]) => ({
        url: `userss/${authUid}.json`,
        method: "PATCH",
        body: body,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetUserByIdQuery,
  usePatchNewUserMutation,
  usePatchUserMutation,
} = bookApi; //EndPint en forma de HOOK: use...
