import { useEffect, useState } from "react";

import { StyleSheet, View, ActivityIndicator } from "react-native";

//Components
import BooksListComponent from "../../components/list/BooksListComponent";

import useGetBooksData from "../../hook/useGetBooksData";

import { useIsFocused } from "@react-navigation/native";
import TitleListComponent from "../../components/list/TitleListComponent";

const ExChangeScreen = ({ navigation }) => {
  //Custom hook to bring all books from firebase
  const { data, isLoading, refetch, booksToReceive, booksToDeliver } =
    useGetBooksData();

  //The result of the filtered books is saved to show in the lists
  const [booksToReceiveList, setBooksToReceiveList] = useState(
    booksToReceive()
  );
  const [booksToDeliverList, setBooksToDeliverList] = useState(
    booksToDeliver()
  );

  //Update data to focus tab
  const isFocused = useIsFocused();

  //Update the list book
  useEffect(() => {
    setBooksToReceiveList(booksToReceive());
    setBooksToDeliverList(booksToDeliver());
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
              books={booksToReceiveList}
              horizontal={true}
            />
          </View>
          <View style={styles.listContainer}>
            <TitleListComponent title='PARA ENTREGAR' />
            <BooksListComponent
              navigation={navigation}
              books={booksToDeliverList}
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
