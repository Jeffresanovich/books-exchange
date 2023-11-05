import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bookInizializatedParams: {
    book_data: {
      title: "",
      synopsis: "",
      subjects: "",
      pages: 0,
      image: "https://www.tourdom.ru/upload/zagl/empty.jpeg",
      author: "",
      ownerUserId: "",
    },
    transaction: {
      currentUserId: "",
      sharingUserId: "",
    },
    key: null,
  },
  book: {},
  bookey: null,
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setBook: (state, action) => {
      state.book = action.payload;
    },
    setBookey: (state, action) => {
      state.bookey = action.payload;
    },
  },
});

export const { setAllBooks, setBookey } = bookSlice.actions;

export default bookSlice.reducer;
