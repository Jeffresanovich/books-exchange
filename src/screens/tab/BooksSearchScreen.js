import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, ActivityIndicator } from "react-native";

import { useIsFocused } from "@react-navigation/native";

import SearchComponent from "../../components/SearchComponent";
import BooksListComponent from "../../components/BooksListComponent";

import { useGetAllBooksQuery } from "../../services/bookApi";
import { useSelector } from "react-redux";

import { filteredSharingBooksByTitle } from "../../data/filteredSharingBooksByTitle";
import { filteredBooksToShared } from "../../data/filteredBooksToShared";

const BooksSearchScreen = ({ navigation }) => {
  //Se guardan todos todos los libros en el estado global
  const { data, isLoading, refetch } = useGetAllBooksQuery();

  //Se traer el usuario actual
  const userId = useSelector((state) => state.userSlice.id);

  //Se guarda el texto y el resultado de la busqueda
  const [text, setText] = useState("");
  const [sharingBooks, setSharingBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  const isFocused = useIsFocused();

  //
  useEffect(() => {
    filteredBooksToShared(data, userId, setSharingBooks);
    filteredSharingBooksByTitle(data, text, userId, setSearchBooks);
  }, [data, isFocused]);

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
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  resultItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
  },
});

export default BooksSearchScreen;
