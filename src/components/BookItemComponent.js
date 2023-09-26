import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { flex } from "../theme/stylesFunctions";

const BookItemComponent = ({ book, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("BookDatailScreen", { book: book })}
      >
        <Image
          style={styles.image}
          height={150}
          width={100}
          source={{ uri: book.image[0] }}
          resizeMode='cover'
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{book.title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default BookItemComponent;

const styles = StyleSheet.create({
  container: {},
  button: {
    ...flex("flex-start"),
  },
  image: {
    margin: 10,
  },
  infoContainer: {
    width: "70%",
  },
  title: {
    fontSize: 23,
    flexWrap: "wrap",
    fontWeight: "300",
    width: "80%",
  },
});
