import { useEffect, useState } from "react";

import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

//Components
import BooksListComponent from "../../components/list/BooksListComponent";

import { useGetAllBooksQuery } from "../../services/bookApi";

//Redux
import { useSelector } from "react-redux";

import {
  filteredBooksReading,
  filteredCurrentUserBooksToShared,
} from "../../hook/useFilteredBooksData";

import { useIsFocused } from "@react-navigation/native";

const LibraryScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  //Se guardan todos todos los libros en el estado global
  const { data, isLoading, refetch } = useGetAllBooksQuery();

  //Se traer el usuario actual
  const userId = useSelector((state) => state.userSlice.id);
  const bookInizializatedParams = {
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
  };

  //Array para listas
  const [booksReading, setBooksReading] = useState([]);
  const [booksToShared, setBooksToShared] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    filteredBooksReading(data, userId, setBooksReading);
    filteredCurrentUserBooksToShared(data, userId, setBooksToShared);
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
            <BooksListComponent
              navigation={navigation}
              books={booksReading}
              horizontal={true}
            />
          </View>
          <View style={styles.container}>
            <BooksListComponent
              navigation={navigation}
              books={booksToShared}
              horizontal={true}
            />
          </View>
          <TouchableOpacity
            style={[styles.button, { top: height - 230, left: width - 100 }]}
            onPress={() =>
              navigation.navigate("FormScreen", {
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

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",

    width: 80,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 100,
    padding: 10,
  },
});
