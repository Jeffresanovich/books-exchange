import { StyleSheet, Text, View } from "react-native";

const BooksSearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text>BookSearch</Text>
    </View>
  );
};

export default BooksSearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
