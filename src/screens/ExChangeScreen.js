import { StyleSheet, Text, View } from "react-native";

import BookDetaileScreen from "./BookDatailScreen";

const ExChangeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ExChangeScreen</Text>
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
