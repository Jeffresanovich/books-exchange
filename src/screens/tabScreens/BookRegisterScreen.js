import { StyleSheet, Text, View } from "react-native";
import React from "react";

const BookRegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text onPress={navigation.goBack}>BookRegisterScreen</Text>
    </View>
  );
};

export default BookRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
