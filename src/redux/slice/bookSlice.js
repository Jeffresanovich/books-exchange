import { createSlice } from "@reduxjs/toolkit";

//import { useGetAllBooksQuery } from "../../services/bookApi";

const initialState = {
  book: {
    book_data: {
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
      const finalArray = [];
      for (const key in action.payload) {
        finalArray.push({ ...action.payload[key], key });
      }

      state.allBooks = finalArray;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
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
  /*
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataFromAPI.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchDataFromAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchDataFromAPI.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },*/
});

export const { setAllBooks, setIsLoading } = bookSlice.actions;

export default bookSlice.reducer;
