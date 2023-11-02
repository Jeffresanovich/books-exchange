import { useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

//Components
import BooksListComponent from "../../components/BooksListComponent";

import { useGetAllBooksQuery } from "../../services/bookApi";

//Redux
import { useSelector } from "react-redux";

import { filteredBooksToReceive } from "../../filtered/filteredBooksToReceive";
import { filteredBooksToDeliver } from "../../filtered/filteredBooksToDeliver";

import { useIsFocused } from "@react-navigation/native";

const ExChangeScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

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
          <View style={styles.container}>
            <Text>Recibir</Text>
            <BooksListComponent
              navigation={navigation}
              books={booksToReceive}
            />
          </View>
          <View style={styles.container}>
            <Text>Entregar</Text>
            <BooksListComponent
              navigation={navigation}
              books={booksToDeliver}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, { top: height - 220, left: width - 100 }]}
            onPress={() =>
              navigation.navigate("BookRegisterScreen", {
                book: bookInizializatedParams,
              })
            }
          >
            <MaterialIcons name='post-add' size={60} color='white' />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default ExChangeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
