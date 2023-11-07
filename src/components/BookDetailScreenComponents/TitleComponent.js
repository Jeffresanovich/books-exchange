import { StyleSheet, View, Text } from "react-native";

import { flex } from "../../theme/commonStyles";

const TitleComponent = ({ bookData }) => {
  const { title, subjects, pages, author } = bookData;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.author}>de {author}</Text>
      <View style={styles.subjectsAndPagesContainer}>
        <Text style={styles.pages}> {pages} paginas</Text>
        <Text style={styles.subjects}>{subjects}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  title: {
    textAlign: "center",
    fontSize: 35,
    marginHorizontal: 10,
    fontWeight: "300",
    fontFamily: "Poppins",
  },
  author: {
    fontSize: 15,
    textAlign: "center",
  },
  subjectsAndPagesContainer: { marginTop: 10, ...flex("space-around") },
  pages: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "300",
    fontFamily: "Poppins",

    padding: 3,
    margin: 10,
  },
  subjects: {
    textAlign: "center",
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

export default TitleComponent;
