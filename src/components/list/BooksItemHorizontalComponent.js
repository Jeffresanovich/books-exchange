import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import { flex, border } from "../../theme/commonStyles";

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
              {title}
              <Text style={styles.pages}> ({pages} pag.)</Text>
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
  container: {
    marginHorizontal: 5,
  },
  button: {
    ...flex("flex-start"),
    height: "85%",
  },
  image: {
    margin: 10,
  },
  titleAndPagesContainer: {},
  infoContainer: {
    width: 220,
  },

  title: {
    fontSize: 25,
    fontWeight: "300",
    fontFamily: "Poppins",
  },
  pages: {
    fontSize: 12,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  subjects: {
    backgroundColor: "grey",
    borderRadius: 30,
    color: "white",
    width: 150,
    fontWeight: "900",
    textAlign: "center",
    padding: 3,
    margin: 10,
  },
});
export default BooksItemHorizontalComponent;
