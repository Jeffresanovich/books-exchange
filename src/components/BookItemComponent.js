import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { flex } from "../theme/commonStyles";

const BookItemComponent = ({ book, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("BookDetailScreen", { book: book })}
      >
        <Image
          style={styles.image}
          height={150}
          width={100}
          source={{ uri: book.book_data.image }}
          resizeMode='cover'
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{book.book_data.title}</Text>
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
