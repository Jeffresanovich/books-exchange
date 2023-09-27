import { StyleSheet, View, Text, Button } from "react-native";

//Redux
import { useSelector } from "react-redux";

//Components
import BooksListComponent from "../../components/BooksListComponent";

const HomeScreen = ({ navigation }) => {
  const booksDB = useSelector((state) => state.bookSlice.allBooks);

  return (
    <View style={styles.container}>
      <BooksListComponent navigation={navigation} booksDB={booksDB} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
