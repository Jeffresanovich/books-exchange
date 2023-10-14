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
      query: (authUid) => `users/${authUid}.json`,
    }),

    //Create user
    patchUser: builder.mutation({
      query: (authUid, user) => ({
        url: `users.json`,
        method: "PATCH",
        body: `{${authUid}:${user}}`,
      }),
    }),

    //Update User Data
    patchUser: builder.mutation({
      query: (authUid, user) => ({
        url: `users/${authUid}.json`,
        method: "PATCH",
        body: user,
      }),
    }),
    //Update
    patchUserImage: builder.mutation({
      query: (authUid, image) => ({
        url: `users/${authUid}.json`,
        method: "PATCH",
        body: `{ image: ${image}}`,
      }),
    }),

    //Delete(inactive user)
    patchUserInactive: builder.mutation({
      query: (id) => ({
        url: `users/${id}.json`,
        method: "PATCH",
        body: { isActive: false },
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetUserByIdQuery,
  usePutUserImageProfileMutation,
} = bookApi; //EndPint en forma de HOOK: use...
