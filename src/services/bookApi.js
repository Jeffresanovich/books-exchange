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

    getUserById: builder.query({
      query: (id) => `users/${id}.json`,
    }),

    putUserImageProfile: builder.mutation({
      query: (id, userImage) => ({
        url: `users/${id}/user_data/image.json`,
        method: "PUT",
        body: userImage,
      }),
    }),
  }),
});

export const {
  useGetAllBooksQuery,
  useGetUserByIdQuery,
  usePutUserImageProfileMutation,
} = bookApi; //EndPint en forma de HOOK: use...
