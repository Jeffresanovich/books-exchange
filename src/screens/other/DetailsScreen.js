import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  Modal,
} from "react-native";

//Icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Components
import TitleComponent from "../../components/BookDetailScreenComponents/TitleComponent";
import DescriptionComponent from "../../components/BookDetailScreenComponents/DescriptionComponent";

//Styles
import { flex, themeColors } from "../../theme/commonStyles";

//Services
import {
  usePatchSharingBookMutation,
  usePatchGetBookMutation,
  usePatchSuccesfulTransactionMutation,
  useDeleteBookMutation,
} from "../../services/bookApi";

import { useSelector } from "react-redux";
import UserDetailsComponent from "../../components/UserDetailsComponent";
import { useState } from "react";

const DetailsScreen = ({ navigation, route }) => {
  //TODO: optimize get book data
  const { book } = route.params;
  const { image, title, synopsis, subjects, pages, author, ownerUserId } =
    book.book_data;
  const { currentUserId, sharingUserId } = book.transaction;
  const userId = useSelector((state) => state.userSlice.id);

  //API Service
  const [deleteBook] = useDeleteBookMutation();
  const [patchSharingBook] = usePatchSharingBookMutation();
  const [patchGetBook] = usePatchGetBookMutation();
  const [patchSuccesfulTransaction] = usePatchSuccesfulTransactionMutation();

  //Modal
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

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
          <View style={styles.infoContainer}>
            <View style={styles.titleRatingStockContainer}>
              <TitleComponent title={title} />
            </View>
          </View>
          <DescriptionComponent description={synopsis} />
          <View style={styles.buttonContainer}>
            <View style={styles.transactionButtonContainer}>
              {sharingUserId === "" && (
                <Pressable
                  style={[styles.button, styles.buyButton]}
                  onPress={() => handleGetBook()}
                >
                  <MaterialCommunityIcons
                    name='book-lock'
                    size={50}
                    color='white'
                  />
                  <Text style={styles.buttonText}>PEDIR</Text>
                </Pressable>
              )}
              {currentUserId === sharingUserId && (
                <Pressable
                  style={[styles.button, styles.buyButton]}
                  onPress={() => handleSharingBook()}
                >
                  <MaterialCommunityIcons name='book' size={50} color='white' />
                  <Text style={styles.buttonText}>COMPARTIR</Text>
                </Pressable>
              )}
              {currentUserId !== userId &&
                currentUserId !== sharingUserId &&
                sharingUserId !== "" && (
                  <>
                    <Pressable
                      style={[styles.button, styles.buyButton]}
                      onPress={() => handleDeliveryBook()}
                    >
                      <MaterialCommunityIcons
                        name='book'
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
                    style={[styles.button, styles.buyButton]}
                    onPress={() =>
                      navigation.navigate("FormScreen", { book: book })
                    }
                  >
                    <MaterialCommunityIcons
                      name='book-lock'
                      size={50}
                      color='white'
                    />
                    <Text style={styles.buttonText}>EDITAR</Text>
                  </Pressable>
                  <Pressable
                    style={[styles.button, styles.buyButton]}
                    onPress={() => handleDelete()}
                  >
                    <MaterialCommunityIcons
                      name='book'
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
  /*
  transactionButtonContainer: {
    ...flex("space-evenly"),
  },
  editButtonContainer: {
    ...flex("space-evenly"),
  },
  */
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
