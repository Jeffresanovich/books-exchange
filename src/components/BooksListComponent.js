import { StyleSheet, View, FlatList, Image } from "react-native";

import BookItemComponent from "./BookItemComponent";

import { useSelector } from "react-redux";

const BooksListComponent = ({ imageVisible }) => {
  const booksDB = useSelector((state) => state.homeSlice.allBooks);
  return (
    <View>
      {imageVisible ? (
        <Image
          style={styles.image}
          source={require("../../assets/product-not-found.png")} //EN PROCESO DE APLICACION
        />
      ) : (
        <FlatList
          data={booksDB}
          keyExtractor={booksDB.id}
          renderItem={({ item }) => <BookItemComponent item={item} />}
        />
      )}
    </View>
  );
};

export default BooksListComponent;

const styles = StyleSheet.create({
  image: {
    marginVertical: 50,
    width: 420,
    height: 400,
  },
});
