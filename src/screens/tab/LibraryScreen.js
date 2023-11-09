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

import { useIsFocused } from "@react-navigation/native";
import TitleListComponent from "../../components/list/TitleListComponent";
import useGetBooksData from "../../hook/useGetBooksData";

const LibraryScreen = ({ navigation }) => {
  //This hook allows to position the floating button
  const { height, width } = useWindowDimensions();

  //Custom hook to bring all books from firebase
  const {
    data,
    isLoading,
    refetch,
    booksReading: readingBook,
    currentUserBooksToShared,
  } = useGetBooksData();

  //Get user id from redux state
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

  //The result of the filtered books is saved to show in the lists
  const [booksReading, setBooksReading] = useState(readingBook());
  const [booksToShared, setBooksToShared] = useState(
    currentUserBooksToShared()
  );

  //Update data to focus tab
  const isFocused = useIsFocused();

  //Update the list book
  useEffect(() => {
    setBooksReading(readingBook());
    setBooksToShared(currentUserBooksToShared());
  }, [data]);

  //Update the list book
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
            <TitleListComponent title='LEYENDO' />

            <BooksListComponent
              navigation={navigation}
              books={booksReading}
              horizontal={true}
            />
          </View>
          <View style={styles.listContainer}>
            <TitleListComponent title='DISPONIBLE' />

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

    justifyContent: "center",
  },
  listContainer: {
    height: "50%",
    alignContent: "center",
  },
  button: {
    position: "absolute",
    width: 80,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 100,
    padding: 10,
  },
});
