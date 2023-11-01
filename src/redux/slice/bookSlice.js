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
  allBooks: [],
  isLoading: true,
  textSearch: null,
  booksFilterByTitle: [],
  navigation: {},
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    setAllBooks: (state, action) => {
      const convertArray = [];
      for (const key in action.payload) {
        convertArray.push({ ...action.payload[key], key });
      }
      state.allBooks = convertArray;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setAllBooks, setIsLoading } = bookSlice.actions;

export default bookSlice.reducer;
