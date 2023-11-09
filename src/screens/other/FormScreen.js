import React, { useState } from "react";
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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { flex } from "../../theme/commonStyles";

//Services
import {
  usePostBookMutation,
  usePatchBookMutation,
} from "../../services/bookApi";

import { openCam, openGalery } from "../../hook/useImagePiker";

const FormScreen = ({ navigation, route }) => {
  //TODO: optimize get book data
  //const { book } = route.params;

  const {
    userId,
    image: img,
    title: tit,
    author: aut,
    subjects: sub,
    pages: pag,
    synopsis: syn,
  } = filteredBookByKey(route.params.book.key);

  const [postBook] = usePostBookMutation();
  const [patchBook] = usePatchBookMutation();

  //Book Data Form
  const [image, setImage] = useState(img);
  const [title, setTitle] = useState(tit);
  const [author, setAuthor] = useState(aut);
  const [subjects, setSubjects] = useState(sub);
  const [pages, setPages] = useState(pag);
  const [synopsis, setSynopsis] = useState(syn);

  //TODO: optimize blank form
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
    margin: 15,
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
