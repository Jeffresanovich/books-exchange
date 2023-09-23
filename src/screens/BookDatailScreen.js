import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
} from "react-native";

//Icons
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

//Components
import TitleComponent from "../components/TitleComponent";
import DescriptionComponent from "../components/DescriptionComponent/";

//Styles
import { flex } from "../theme/stylesFunctions";
import { useSelector } from "react-redux";

const BookDatailScreen = () => {
  const book = useSelector((state) => state.homeSlice.allBooks[2]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: book.image[0],
            }}
          />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.titleRatingStockContainer}>
            <TitleComponent title={book.title} />
          </View>
        </View>
        <DescriptionComponent description={book.long_title} />
        <View style={styles.buttonContainer}>
          <Pressable style={[styles.button, styles.buyButton]}>
            <MaterialIcons name='payment' size={50} color='white' />
            <Text style={styles.buttonText}>Buy</Text>
          </Pressable>
          <Pressable style={[styles.button, styles.cartButton]}>
            <Text style={styles.buttonText}>Cart</Text>
            <FontAwesome5 name='shopping-cart' size={40} color='white' />
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

export default BookDatailScreen;

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
    backgroundColor: "blue",
  },
  cartButton: {
    ...flex("space-evenly"),
    backgroundColor: "green",
  },
});
