import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { useGetAllBooksQuery } from "../../services/bookApi";

import { MaterialIcons } from "@expo/vector-icons";

//Components
import BooksListComponent from "../../components/BooksListComponent";

const LibraryScreen = ({ navigation }) => {
  const { data, isLoading } = useGetAllBooksQuery();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='grey' />
      ) : (
        <>
          <BooksListComponent navigation={navigation} booksDB={data} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("BookRegisterScreen")}
          >
            <MaterialIcons name='post-add' size={60} color='white' />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default LibraryScreen;

const styles = StyleSheet.create({
  container: {
    //position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    position: "absolute",
    top: 500,
    right: 30,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 100,
    padding: 10,
    //width: 200,
    //height: 100,
    //border: 3px solid #73AD21;
  },
});
