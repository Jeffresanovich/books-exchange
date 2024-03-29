import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, ActivityIndicator } from "react-native";

import { useIsFocused } from "@react-navigation/native";

import SearchComponent from "../../components/SearchComponent";
import BooksListComponent from "../../components/list/BooksListComponent";

import { useGetAllBooksQuery } from "../../services/bookApi";
import { useSelector } from "react-redux";

import {
  filteredSharingBooksByTitle,
  filteredBooksToShared,
} from "../../hook/useFilteredBooksData";

const SearchScreen = ({ navigation }) => {
  //Custom hook to bring all books from firebase
  const { data, isLoading, refetch } = useGetAllBooksQuery();

  //Get user id from redux state
  const userId = useSelector((state) => state.userSlice.id);

  //Se guarda el texto y el resultado de la busqueda
  const [text, setText] = useState("");
  const [sharingBooks, setSharingBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  //Update data to focus tab
  const isFocused = useIsFocused();

  //Update the list book
  useEffect(() => {
    filteredBooksToShared(data, userId, setSharingBooks);
    filteredSharingBooksByTitle(data, text, userId, setSearchBooks);
  }, [data, isFocused]);

  //Update the list book
  useEffect(() => {
    refetch();
    filteredSharingBooksByTitle(data, text, userId, setSearchBooks);
  }, [text]);

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
