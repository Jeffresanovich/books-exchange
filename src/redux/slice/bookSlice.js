import { createSlice } from "@reduxjs/toolkit";

import books from "../../data/booksDB";

const bookSlice = createSlice({
  name: "home",
  initialState: {
    allBooks: books,
    textSearch: null,
    booksFilterByTitle: [],
  },
  reducers: {
    setBooksSearch: (state, action) => {
      state.textSearch = action.payload;

      state.booksFilterByTitle = state.allBooks.filter(({ title }) => {
        textSearch.toLocaleLowerCase() === title.toLowerCase;
      });
    },
  },
});

export const { setBooksSearch } = bookSlice.actions;

export default bookSlice.reducer;
