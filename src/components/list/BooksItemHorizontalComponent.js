import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { flex } from "../../theme/commonStyles";

const BooksItemHorizontalComponent = ({ book, navigation }) => {
  const { image, title } = book.book_data;
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("DetailsScreen", { book: book })}
      >
        <Image
          style={styles.image}
          height={150}
          width={100}
          source={{ uri: image }}
          resizeMode='cover'
        />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};

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

export default BooksItemHorizontalComponent;
