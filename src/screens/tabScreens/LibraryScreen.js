import { StyleSheet, View, ActivityIndicator } from "react-native";

import { useGetAllBooksQuery } from "../../services/bookApi";

//Components
import BooksListComponent from "../../components/BooksListComponent";

const LibraryScreen = ({ navigation }) => {
  const { data, isLoading } = useGetAllBooksQuery();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='grey' />
      ) : (
        <BooksListComponent navigation={navigation} booksDB={data} />
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
});
