import { useEffect, useState } from "react";

import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

//Components
import BooksListComponent from "../../components/list/BooksListComponent";

import { useGetAllBooksQuery } from "../../services/bookApi";

//Redux
import { useSelector } from "react-redux";

import {
  filteredBooksToReceive,
  filteredBooksToDeliver,
} from "../../hook/useFilteredBooksData";

import { useIsFocused } from "@react-navigation/native";

const ExChangeScreen = ({ navigation }) => {
  //Se guardan todos todos los libros en el estado global
  const { data, isLoading, refetch } = useGetAllBooksQuery();

  //Se traer el usuario actual y todos los libros guardados en el estado global
  const userId = useSelector((state) => state.userSlice.id);

  //Se guarda el resultado de los libros filtrados para mostar en las listas
  const [booksToReceive, setBooksToReceive] = useState([]);
  const [booksToDeliver, setBooksToDeliver] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    filteredBooksToReceive(data, userId, setBooksToReceive);
    filteredBooksToDeliver(data, userId, setBooksToDeliver);
  }, [data]);

  useEffect(() => {
    refetch();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='grey' />
      ) : (
        <>
          <View style={styles.listContainer}>
            <Text style={styles.titulo}>LIBROS POR RECIBIR</Text>
            <BooksListComponent
              navigation={navigation}
              books={booksToReceive}
              horizontal={true}
            />
          </View>
          <View style={styles.listContainer}>
            <Text style={styles.titulo}>LIBROS PARA ENTREGAR</Text>
            <BooksListComponent
              navigation={navigation}
              books={booksToDeliver}
              horizontal={true}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ExChangeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",
  },
  listContainer: {
    height: "50%",
    alignContent: "center",
  },
  titulo: {
    marginTop: "3%",
    marginVertical: "1%",
    fontSize: 30,
    textAlign: "center",
  },
});
