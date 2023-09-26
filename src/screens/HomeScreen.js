import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSelector } from "react-redux";

import BooksListComponent from "../components/BooksListComponent";

const HomeScreen = ({ navigation }) => {
  const booksDB = useSelector((state) => state.bookSlice.allBooks);
  return (
    <View style={styles.container}>
      <BooksListComponent navigation={navigation} booksDB={booksDB} />
      <StatusBar style='auto' />
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
