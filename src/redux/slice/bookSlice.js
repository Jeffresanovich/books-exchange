import { createSlice } from "@reduxjs/toolkit";

import books from "../../data/booksDB";

const initialState = {
  allBooks: books,
  textSearch: null,
  booksFilterByTitle: [],
  navigation: {},
};

const bookSlice = createSlice({
  name: "book",
  initialState,
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
