import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import TitleComponent from "../../components/BookDetailScreenComponents/TitleComponent";
import DescriptionComponent from "../../components/BookDetailScreenComponents/DescriptionComponent";

//Styles
import { flex, themeColors } from "../../theme/commonStyles";

const BookDetailScreen = ({ navigation, route }) => {
  const { book } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: book.book_data.image,
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleRatingStockContainer}>
            <TitleComponent title={book.book_data.title} />
          </View>
        </View>
        <DescriptionComponent description={book.book_data.long_title} />
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.buyButton]}>
            <MaterialCommunityIcons name='book-lock' size={50} color='white' />
            <Text style={styles.buttonText}>RESERVAR</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buyButton]}
            onPress={() =>
              navigation.navigate("BookRegisterScreen", { book: book })
            }
          >
            <MaterialCommunityIcons name='book' size={50} color='white' />
            <Text style={styles.buttonText}>EDITAR</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginTop: 10,
  },
  infoContainer: {
    ...flex("space-evenly"),
    marginVertical: 15,
  },
  titleRatingStockContainer: {
    width: 300,
  },
  ratingStockContainer: {
    ...flex("space-evenly"),
    fontSize: 10,
    marginTop: 10,
  },
  ratingContainer: {
    ...flex("space-evenly"),
  },
  rating: {
    textAlign: "center",
    color: "grey",
  },
  stock: {
    color: "grey",
  },
  priceContainer: {
    alignItems: "center",
    marginEnd: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 50,
    margin: 10,
    width: 300,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
  },
  buyButton: {
    ...flex("space-evenly"),
    backgroundColor: themeColors.heavyBlue,
  },
  cartButton: {
    ...flex("space-evenly"),
    backgroundColor: "green",
  },
});
