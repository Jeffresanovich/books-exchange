import { base_url } from "../firebase/realTimeDBFirebase";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
  reducerPath: "bookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: base_url,
  }),
  endpoints: (builder) => ({
    //*********    BOOK CRUD    **********
    //ReadAllBook
    getAllBooks: builder.query({
      query: () => `books.json`,
    }),

    //Read Book by Title
    getBooksByTitle: builder.query({
      query: (title) =>
        `books.json?orderBy="book_data/title"&startAt="${title}"`,
    }),

    //Read Book by Title
    getBooksByIdKey: builder.query({
      query: (title) => `books.json/"${title}"`,
    }),

    //Create book
    postBook: builder.mutation({
      query: (body) => ({
        url: `books.json`,
        method: "POST",
        body: body,
      }),
    }),

    //Update Book
    patchBook: builder.mutation({
      query: ([bookKey, body]) => ({
        url: `books/${bookKey}.json`,
        method: "PATCH",
        body: body,
      }),
    }),

    //Delete Book
    deleteBook: builder.mutation({
      query: (bookKey) => ({
        url: `books/${bookKey}.json`,
        method: "DELETE",
      }),
    }),

    //*********    TRANSACTION CILCE    **********
    //Share book button:
    patchSharingBook: builder.mutation({
      query: (bookKey) => ({
        url: `books/${bookKey}/transaction.json/`,
        method: "PATCH",
        body: { sharingUserId: "" },
      }),
    }),

    //Get book button:
    patchGetBook: builder.mutation({
      query: ([bookKey, userId]) => ({
        url: `books/${bookKey}/transaction.json/`,
        method: "PATCH",
        body: { sharingUserId: userId },
      }),
    }),

    //Succesful Transaction Button:
    patchSuccesfulTransaction: builder.mutation({
      query: ([bookKey, sharingUserId]) => ({
        url: `books/${bookKey}/transaction/.json/`,
        method: "PATCH",
        body: {
          currentUserId: sharingUserId,
        },
      }),
    }),

    //*********    USER CRUD    **********
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

    //Update user coordinates
    patchUserCoordinates: builder.mutation({
      query: ([userId, body]) => ({
        url: `users/${userId}/exchangePoint.json`,
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
  //BOOKS
  useGetAllBooksQuery,
  useGetBooksByIdKeyQuery,
  useGetBooksByTitleQuery,
  usePostBookMutation,
  usePatchBookMutation,
  useDeleteBookMutation,
  //TRANSACTION
  usePatchSharingBookMutation,
  usePatchGetBookMutation,
  usePatchSuccesfulTransactionMutation,
  //USERS
  useGetUserByUidQuery,
  usePutUserMutation,
  usePatchUserMutation,
  usePatchUserCoordinatesMutation,
  useDeleteUserMutation,
} = bookApi; //EndPint en forma de HOOK: use...
