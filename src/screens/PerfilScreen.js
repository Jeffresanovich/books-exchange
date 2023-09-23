import { StyleSheet, Text, View } from "react-native";
import React from "react";

const PerfilScreen = () => {
  return (
    <View style={styles.container}>
      <Text>PerfilScreen</Text>
    </View>
  );
};

export default PerfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
