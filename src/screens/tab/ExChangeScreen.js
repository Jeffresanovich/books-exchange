import { useEffect, useState } from "react";

import { StyleSheet, View, Text, ActivityIndicator } from "react-native";

//Components
import BooksListComponent from "../../components/list/BooksListComponent";

import { useGetAllBooksQuery } from "../../services/bookApi";

//Redux
import { useSelector } from "react-redux";

import {
  filteredBooksToReceive,
  filteredBooksToDeliver,
} from "../../hook/useFilteredBooksData";

import { useIsFocused } from "@react-navigation/native";
import TitleListComponent from "../../components/list/TitleListComponent";

const ExChangeScreen = ({ navigation }) => {
  //Custom hook to bring all books from firebase
  const { data, isLoading, refetch } = useGetAllBooksQuery();

  //Get user id from redux state
  const userId = useSelector((state) => state.userSlice.id);

  //The result of the filtered books is saved to show in the lists
  const [booksToReceive, setBooksToReceive] = useState([]);
  const [booksToDeliver, setBooksToDeliver] = useState([]);

  //Update data to focus tab
  const isFocused = useIsFocused();

  //Update the list book
  useEffect(() => {
    filteredBooksToReceive(data, userId, setBooksToReceive);
    filteredBooksToDeliver(data, userId, setBooksToDeliver);
  }, [data]);

  //Update the list book
  useEffect(() => {
    refetch();
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='grey' />
      ) : (
        <>
          <View style={styles.listContainer}>
            <TitleListComponent title='POR RECIBIR' />
            <BooksListComponent
              navigation={navigation}
              books={booksToReceive}
              horizontal={true}
            />
          </View>
          <View style={styles.listContainer}>
            <TitleListComponent title='PARA ENTREGAR' />
            <BooksListComponent
              navigation={navigation}
              books={booksToDeliver}
              horizontal={true}
            />
          </View>
        </>
      )}
    </View>
  );
};

export default ExChangeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  listContainer: {
    height: "50%",
    alignContent: "center",
  },
  titulo: {
    marginTop: "3%",
    marginVertical: "1%",
    fontSize: 30,
    textAlign: "center",
  },
});
