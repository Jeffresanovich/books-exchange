import { createSlice } from "@reduxjs/toolkit";

//RTK
import { useGetAllBooksQuery } from "../../services/bookApi";

const initialState = {
  book: {
    title: "",
    longTitle: "",
    sinopsis: "",
    subjects: "",
    page: 0,
    image: "https://www.tourdom.ru/upload/zagl/empty.jpeg",
    edition: "",
    publishedDate: "",
    author: "",
  },
  getAllBooks: [],
  isLoading: true,
  textSearch: null,
  booksFilterByTitle: [],
  navigation: {},
};

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    getAllBooks: (state) => {
      console.log(data, null, "");
      state.books = //convertDataResponse(data);
        state.isLoading = isLoading;
    },
    setBook: (state, action) => {
      state.book = action.payload;

      console.log(state.book);
    },
    /*
    setBooksSearch: (state, action) => {
      state.textSearch = action.payload;

      state.booksFilterByTitle = state.allBooks.filter(({ title }) => {
        textSearch.toLocaleLowerCase() === title.toLowerCase;
      });
    },
    */
  },
});

/**
 * This custom hook get the data (object) from firebase, add the firebase key
 * and save then in a new object.
 * Then save the new object (data with firebase key) in an array state callback.
 * @param {Object} data Data (object) like response from realtime database.
 * @param {Function} setStateCallback callBack where the convert info is saved.
 */
const convertDataResponse = (data) => {
  const finalArray = [];
  for (const key in data) {
    finalArray.push({ ...data[key], key });
  }
  return finalArray;
};

export const { setBook, getAllBooks } = bookSlice.actions;

export default bookSlice.reducer;
