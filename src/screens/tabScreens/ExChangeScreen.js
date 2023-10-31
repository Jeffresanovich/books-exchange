import { useEffect } from "react";

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

const ExChangeScreen = ({ navigation }) => {
  const { height, width } = useWindowDimensions();

  const dispatch = useDispatch();
  const { data, isLoading } = useGetAllBooksQuery();

  const books = useSelector((state) => state.bookSlice.allBooks);
  const bookInizializatedParams = useSelector((state) => state.bookSlice.book);

  useEffect(() => {
    dispatch(setAllBooks(data));
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

export default ExChangeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
