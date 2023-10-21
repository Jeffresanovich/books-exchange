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

    //Create User
    putUser: builder.mutation({
      query: ([userId, body]) => ({
        url: `users/${userId}.json`,
        method: "PUT",
        body: body,
      }),
    }),

    //Update User
    patchUser: builder.mutation({
      query: ([userId, body]) => ({
        url: `users/${userId}.json`,
        method: "PATCH",
        body: body,
      }),
    }),
    //"Delete" User
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `users/${userId}.json`,
        method: "PATCH",
        body: { isActive: false },
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,

  //USERS
  useGetUserByUidQuery,
  usePutUserMutation,
  usePatchUserMutation,
  useDeleteUserMutation,
} = bookApi; //EndPint en forma de HOOK: use...
