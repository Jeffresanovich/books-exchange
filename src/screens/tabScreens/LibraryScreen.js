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
import BooksListComponent from "../../components/BooksListComponent";

import { useGetAllBooksQuery } from "../../services/bookApi";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { setAllBooks } from "../../redux/slice/bookSlice";

import { filteredBooksReading } from "../../filtered/filteredBooksReading";
import { filteredCurrentUserBooksToShared } from "../../filtered/filteredCurrentUserBooksToShared";

const LibraryScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  //Se guardan todos todos los libros en el estado global
  const { data, isLoading, refetch } = useGetAllBooksQuery();
  const dispatch = useDispatch();

  //Se traer el usuario actual y todos los libros guardados en el estado global
  const allBooks = useSelector((state) => state.bookSlice.allBooks);
  const userId = useSelector((state) => state.userSlice.id);
  const bookInizializatedParams = useSelector(
    (state) => state.bookSlice.bookInizializatedParams
  );

  const [booksReading, setBooksReading] = useState([]);
  const [booksToShared, setBooksToShared] = useState([]);

  useEffect(() => {
    dispatch(setAllBooks(data));
    filteredBooksReading(allBooks, userId, setBooksReading);
    filteredCurrentUserBooksToShared(allBooks, userId, setBooksToShared);
  }, [data]);

  const handleScroll = () => {
    refetch();
    dispatch(setAllBooks(data));
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='grey' />
      ) : (
        <>
          <BooksListComponent navigation={navigation} books={booksReading} />
          <BooksListComponent navigation={navigation} books={booksToShared} />
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
