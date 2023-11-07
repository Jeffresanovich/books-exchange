import {
  SafeAreaView,
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
import UserDetailsComponent from "../../components/UserDetailsComponent";

//Styles
import { flex, themeColors } from "../../theme/commonStyles";

//Services
import {
  usePatchSharingBookMutation,
  usePatchGetBookMutation,
  usePatchSuccesfulTransactionMutation,
  useDeleteBookMutation,
} from "../../services/bookApi";

//Redux
import { useSelector } from "react-redux";

const DetailsScreen = ({ navigation, route }) => {
  //TODO: optimize get book data
  const { book } = route.params;
  const { image, title, synopsis, subjects, pages, author, ownerUserId } =
    book.book_data;
  const { currentUserId, sharingUserId } = book.transaction;
  const userId = useSelector((state) => state.userSlice.id);

  //API Services
  const [deleteBook] = useDeleteBookMutation();
  const [patchSharingBook] = usePatchSharingBookMutation();
  const [patchGetBook] = usePatchGetBookMutation();
  const [patchSuccesfulTransaction] = usePatchSuccesfulTransactionMutation();

  const handleSharingBook = () => {
    patchSharingBook(book.key);
    navigation.goBack();
  };
  const handleGetBook = () => {
    patchGetBook([book.key, userId]);
    navigation.goBack();
  };
  const handleDeliveryBook = () => {
    patchSuccesfulTransaction([book.key, sharingUserId]);
    navigation.goBack();
  };

  const handleDelete = () => {
    deleteBook(book.key);
    navigation.goBack();
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{
                uri: image,
              }}
            />
          </View>
          <TitleComponent bookData={book.book_data} />
          <DescriptionComponent description={synopsis} />
          <View style={styles.buttonContainer}>
            <View style={styles.transactionButtonContainer}>
              {sharingUserId === "" && (
                <Pressable
                  style={styles.button}
                  onPress={() => handleGetBook()}
                >
                  <MaterialCommunityIcons name='lock' size={50} color='white' />
                  <Text style={styles.buttonText}>RESERVAR</Text>
                </Pressable>
              )}
              {currentUserId === sharingUserId && (
                <Pressable
                  style={styles.button}
                  onPress={() => handleSharingBook()}
                >
                  <MaterialCommunityIcons
                    name='share'
                    size={50}
                    color='white'
                  />
                  <Text style={styles.buttonText}>COMPARTIR</Text>
                </Pressable>
              )}
              {currentUserId !== userId &&
                currentUserId !== sharingUserId &&
                sharingUserId !== "" && (
                  <>
                    <Pressable
                      style={[styles.button, { backgroundColor: "green" }]}
                      onPress={() => handleDeliveryBook()}
                    >
                      <MaterialCommunityIcons
                        name='check-all'
                        size={50}
                        color='white'
                      />
                      <Text style={styles.buttonText}>RECIBIDO</Text>
                    </Pressable>
                    <UserDetailsComponent userId={currentUserId} />
                  </>
                )}
              {currentUserId === userId &&
                currentUserId !== sharingUserId &&
                sharingUserId !== "" && (
                  <UserDetailsComponent userId={sharingUserId} />
                )}
            </View>
            {currentUserId === userId &&
              sharingUserId === userId &&
              ownerUserId === userId && (
                <View style={styles.editButtonContainer}>
                  <Pressable
                    style={[styles.button, { backgroundColor: "green" }]}
                    onPress={() =>
                      navigation.navigate("FormScreen", { book: book })
                    }
                  >
                    <MaterialCommunityIcons
                      name='playlist-edit'
                      size={50}
                      color='white'
                    />
                    <Text style={styles.buttonText}>EDITAR</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, { backgroundColor: "red" }]}
                    onPress={() => handleDelete()}
                  >
                    <MaterialCommunityIcons
                      name='delete'
                      size={50}
                      color='white'
                    />
                    <Text style={styles.buttonText}>BORRAR</Text>
                  </Pressable>
                </View>
              )}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  title: {},
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
    ...flex("space-evenly"),
    backgroundColor: themeColors.heavyBlue,
  },
  buttonText: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
  },
  cartButton: {
    ...flex("space-evenly"),
    backgroundColor: "green",
  },
});
