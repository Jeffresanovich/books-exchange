import React, { useEffect, useState } from "react";
import { View, TextInput, StyleSheet, ActivityIndicator } from "react-native";

import BooksListComponent from "../../components/BooksListComponent";

import { useGetAllBooksQuery } from "../../services/bookApi";
import { useSelector } from "react-redux";

import { filteredSharingBooksByTitle } from "../../filtered/filteredSharingBooksByTitle";
import { filteredBooksToShared } from "../../filtered/filteredBooksToShared";
import { useIsFocused } from "@react-navigation/native";

const BooksSearchScreen = ({ navigation }) => {
  //Se guardan todos todos los libros en el estado global
  const { data, isLoading, refetch } = useGetAllBooksQuery();

  //Se traer el usuario actual y todos los libros guardados en el estado global
  const userId = useSelector((state) => state.userSlice.id);

  //Se guarda el texto y el resultado de la busqueda
  const [text, setText] = useState("");
  const [sharingBooks, setSharingBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);

  const isFocused = useIsFocused();

  //Se "actualiza" el estado global de todos lo libros
  useEffect(() => {
    filteredBooksToShared(data, userId, setSharingBooks);
  }, []);

  useEffect(() => {
    refetch();
    filteredSharingBooksByTitle(data, text, userId, setSearchBooks);
    filteredBooksToShared(data, userId, setSharingBooks);
  }, [text, isFocused]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Buscar...'
        value={text}
        onChangeText={setText}
      />
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
