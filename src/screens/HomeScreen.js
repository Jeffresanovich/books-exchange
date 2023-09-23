import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import BooksListComponent from "../components/BooksListComponent";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <BooksListComponent />
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
