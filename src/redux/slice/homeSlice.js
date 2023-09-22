import { createSlice } from "@reduxjs/toolkit";

import books from "../../data/booksDB";

const homeSlice = createSlice({
  name: "home",
  initialState: {
    allBooks: books,
    textSearch: null,
    booksFilterByTitle: [],
  },
  reducers: {
    setBooksSearch: ({ textSearch, booksFilterByTitle, allBooks }, action) => {
      textSearch = action.payload;

      booksFilterByTitle = allBooks.filter(({ title }) => {
        textSearch.toLocaleLowerCase() === title.toLowerCase;
      });
    },
  },
});

export const { setBooksSearch } = homeSlice.actions;

export default homeSlice.reducer;
