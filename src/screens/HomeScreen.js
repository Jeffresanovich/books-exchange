import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

import BooksListComponent from "../components/BooksListComponent";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <BooksListComponent navigation={navigation} />
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
