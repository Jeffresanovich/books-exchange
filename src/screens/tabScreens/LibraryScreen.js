import { useState, useEffect } from "react";

import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";

import { MaterialIcons } from "@expo/vector-icons";

//Components
import BooksListComponent from "../../components/BooksListComponent";

import { useGetAllBooksQuery } from "../../services/bookApi";
import useConvertDataResponse from "../../hooks/useConvertDataResponse";

const LibraryScreen = ({ navigation }) => {
  const { data, isLoading } = useGetAllBooksQuery();
  const [response, setResponse] = useState([]);

  useEffect(() => {
    useConvertDataResponse(data, setResponse);
  }, [data]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='grey' />
      ) : (
        <>
          <BooksListComponent navigation={navigation} booksDB={response} />
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
  },
});
