import { useState, useEffect } from "react";

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
import useConvertDataResponse from "../../hooks/useConvertDataResponse";

import { getDatabase, ref, onValue } from "firebase/database";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getAllBooks } from "../../redux/slice/bookSlice";

const LibraryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { data, isLoading, refetch } = useGetAllBooksQuery();
  const { height, width } = useWindowDimensions();
  const [books, setBooks] = useState([]);
  const bookInizializatedParams = {
    book_data: {
      title: "",
      longTitle: "",
      sinopsis: "",
      subjects: "",
      page: 0,
      image: "https://www.tourdom.ru/upload/zagl/empty.jpeg",
      publishedDate: "",
      author: "",
    },
    key: null,
  };

  const db = getDatabase();
  const starCountRef = ref(db, "books");
  onValue(starCountRef, () => {
    refetch();
  });

  useEffect(() => {
    useConvertDataResponse(data, setBooks);
  }, [data]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='grey' />
      ) : (
        <>
          <BooksListComponent navigation={navigation} books={books} />
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
