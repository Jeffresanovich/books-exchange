import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { flex } from "../../theme/commonStyles";

const BooksItemHorizontalComponent = ({ book, navigation }) => {
  const { image, title, subjects, pages, author } = book.book_data;

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
        <View style={styles.titleAndPagesContainer}>
          <View style={styles.infoContainer}>
            <Text style={styles.title}>
              {title} <Text style={styles.pages}> ({pages} pag.)</Text>
            </Text>
          </View>
          <Text style={styles.author}>De {author}</Text>
          <Text style={styles.subjects}>{subjects}</Text>
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
  titleAndPagesContainer: {
    // ...flex("flex-start"),
  },
  infoContainer: {
    width: "70%",
  },

  title: {
    fontSize: 23,
    //flexWrap: "wrap",
    fontWeight: "300",
    //width: "80%",
    fontFamily: "Poppins",
  },
  pages: {
    fontSize: 13,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  subjects: {
    backgroundColor: "red",
    borderRadius: 30,
    color: "white",
    width: 200,
    fontWeight: "900",
    textAlign: "center",
    margin: 10,
  },
});

export default BooksItemHorizontalComponent;
