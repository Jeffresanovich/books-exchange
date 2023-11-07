import { StyleSheet, View, FlatList } from "react-native";

import BooksItemHorizontalComponent from "./BooksItemHorizontalComponent";
import BooksItemVerticalComponent from "./BooksItemVerticalComponent";

const BooksListComponent = ({ navigation, books, horizontal }) => {
  return (
    <View>
      <FlatList
        data={books}
        horizontal={horizontal}
        keyExtractor={books.id}
        renderItem={({ item }) =>
          horizontal ? (
            <BooksItemHorizontalComponent book={item} navigation={navigation} />
          ) : (
            <BooksItemVerticalComponent book={item} navigation={navigation} />
          )
        }
      />
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
