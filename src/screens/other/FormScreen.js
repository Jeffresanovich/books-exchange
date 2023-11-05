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

//Services
import {
  usePostBookMutation,
  usePatchBookMutation,
} from "../../services/bookApi";

import { useSelector } from "react-redux";

import { openCam, openGalery } from "../../hook/useImagePiker";

const FormScreen = ({ navigation, route }) => {
  const { book } = route.params;

  const [postBook] = usePostBookMutation();
  const [patchBook] = usePatchBookMutation();

  //Book Data Form
  const [image, setImage] = useState(book.book_data.image);
  const [title, setTitle] = useState(book.book_data.title);
  const [author, setAuthor] = useState(book.book_data.author);
  const [subjects, setSubjects] = useState(book.book_data.subjects);
  const [pages, setPages] = useState(book.book_data.pages);
  const [synopsis, setSynopsis] = useState(book.book_data.synopsis);

  const userId = useSelector((state) => state.userSlice.id);

  const formBook = {
    book_data: {
      image,
      title,
      author,
      subjects,
      pages: parseInt(pages),
      synopsis,
      ownerUserId: userId,
    },
    transaction: {
      currentUserId: userId,
      sharingUserId: userId,
    },
  };

  const handleCreate = () => {
    postBook(formBook);
    navigation.navigate("LibraryScreen");
  };
  const handleUpdate = () => {
    patchBook([book.key, formBook]);
    navigation.navigate("LibraryScreen");
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Image source={{ uri: image }} style={styles.profileImage} />
          <View style={styles.imageEdit}>
            <View style={styles.openCamGaleryContainer}>
              <TouchableOpacity onPress={() => openCam(setImage)}>
                <MaterialCommunityIcons name='camera' size={35} color='grey' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => openGalery(setImage)}>
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
          value={pages.toString()}
          onChangeText={setPages}
        />

        <TextInput
          style={[styles.input, { height: 200 }]}
          multiline
          placeholder='Resumen'
          value={synopsis}
          onChangeText={setSynopsis}
        />
        {!!book.key ? (
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Actualizar</Text>
          </TouchableOpacity>
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

export default FormScreen;
