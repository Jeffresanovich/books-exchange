import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import { useIsFocused } from "@react-navigation/native";

import SearchComponent from "../../components/SearchComponent";
import BooksListComponent from "../../components/list/BooksListComponent";

import useGetBooksData from "../../hook/useGetBooksData";

const SearchScreen = ({ navigation }) => {
  //Custom hook to bring all books from firebase
  const { data, isLoading, refetch, booksToShared, sharingBooksByTitle } =
    useGetBooksData();

  //Se guarda el texto y el resultado de la busqueda
  const [text, setText] = useState("");
  const [sharingBooks, setSharingBooks] = useState(booksToShared());
  const [searchBooks, setSearchBooks] = useState([]);

  //Update data to focus tab
  const isFocused = useIsFocused();

  //Update the list book
  useEffect(() => {
    setSearchBooks(sharingBooksByTitle(text));
    setSharingBooks(booksToShared());
  }, [data, text]);

  //Update the list book
  useEffect(() => {
    refetch();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <SearchComponent text={text} setText={setText} />
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator size='large' color='grey' />
        ) : (
          <BooksListComponent
            navigation={navigation}
            books={text === "" ? sharingBooks : searchBooks}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;
