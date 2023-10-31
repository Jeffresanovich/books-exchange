import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

//Styles
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { flex, border } from "../../theme/commonStyles";

//Cam and ImageGalery
import * as ImagePicker from "expo-image-picker";

//Services
import {
  usePostBookMutation,
  usePatchBookMutation,
  useDeleteBookMutation,
} from "../../services/bookApi";

import { useGetAllBooksQuery } from "../../services/bookApi";

import { useSelector, useDispatch } from "react-redux";
import { setLoad, setAllBooks } from "../../redux/slice/bookSlice";

const BookRegisterScreen = ({ navigation, route }) => {
  const { book } = route.params;

  const dispatch = useDispatch();

  const { data, refetch } = useGetAllBooksQuery();

  const [postBook] = usePostBookMutation();
  const [patchBook] = usePatchBookMutation();
  const [deleteBook] = useDeleteBookMutation();

  //Book Data Form
  const [title, setTitle] = useState(book.book_data.title);
  const [longTitle, setLongTitle] = useState(book.book_data.longTitle);
  const [sinopsis, setSinopsis] = useState(book.book_data.sinopsis);
  const [subjects, setSubjects] = useState(book.book_data.subjects);
  const [page, setPage] = useState(book.book_data.page);
  const [image, setImage] = useState(book.book_data.image);
  const [author, setAuthor] = useState(book.book_data.author);

  const userId = useSelector((state) => state.userSlice.id);

  const formBook = {
    book_data: {
      title,
      sinopsis,
      subjects,
      page,
      image,
      author,
      ownerUserId: userId,
    },
    transaction: {
      currentUserId: userId,
      sharingUserId: userId,
    },
  };

  const handleCreate = () => {
    postBook(formBook);
    refetch();
    dispatch(setAllBooks(data));
    navigation.navigate("LibraryScreen");
  };
  const handleUpdate = () => {
    patchBook([book.key, formBook]);
    refetch();
    dispatch(setAllBooks(data));
    navigation.navigate("LibraryScreen");
  };
  const handleDelete = () => {
    deleteBook(book.key);
    refetch();
    dispatch(setAllBooks(data));
    navigation.navigate("LibraryScreen");
  };

  const handleOpenCam = async () => {
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      Alert.alert(
        "ATENCION!",
        "La app no tiene permiso para acceder a la camara"
      );
      return;
    } else {
      const result = await ImagePicker.launchCameraAsync({
        base64: true,
      });

      changeImage(result);
    }
  };

  const handleOpenGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 1,
      base64: true,
    });
    changeImage(result);
  };

  const changeImage = async (result) => {
    if (!result.canceled) {
      await setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: image }} style={styles.profileImage} />
          <View style={styles.imageEdit}>
            <View style={styles.openCamGaleryContainer}>
              <TouchableOpacity onPress={handleOpenCam}>
                <MaterialCommunityIcons name='camera' size={35} color='grey' />
              </TouchableOpacity>
              <TouchableOpacity onPress={handleOpenGalery}>
                <MaterialCommunityIcons
                  name='folder-image'
                  size={35}
                  color='grey'
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder='Título'
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.input}
          placeholder='Subtitulo'
          value={longTitle}
          onChangeText={setLongTitle}
        />
        <TextInput
          style={styles.input}
          placeholder='Autor'
          value={author}
          onChangeText={setAuthor}
        />
        <TextInput
          style={styles.input}
          placeholder='Tema'
          value={subjects}
          onChangeText={setSubjects}
        />
        <TextInput
          style={styles.input}
          placeholder='Pagina'
          value={page}
          onChangeText={setPage}
        />

        <TextInput
          style={[styles.input, { height: 200 }]}
          multiline
          placeholder='Sinopsis'
          value={sinopsis}
          onChangeText={setSinopsis}
        />
        {!!book.key ? (
          <>
            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Actualizar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleDelete}>
              <Text style={styles.buttonText}>Borrar</Text>
            </TouchableOpacity>
          </>
        ) : (
          <TouchableOpacity style={styles.button} onPress={handleCreate}>
            <Text style={styles.buttonText}>Cargar</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  profileImage: {
    width: 150,
    height: 200,
    borderRadius: 10,
  },

  imageEdit: {
    width: 150,
    height: 35,
    marginVertical: 15,
    alignItems: "center",
  },
  openCamGaleryContainer: {
    width: 200,
    ...flex("space-around", "center"),
  },
  heading: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default BookRegisterScreen;
