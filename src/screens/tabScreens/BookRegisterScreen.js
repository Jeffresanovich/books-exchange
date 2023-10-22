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
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { flex, border } from "../../theme/commonStyles";

//Cam and ImageGalery
import * as ImagePicker from "expo-image-picker";

//Services
import { usePutBookMutation } from "../../services/bookApi";

//Redux
import { useSelector } from "react-redux";

const BookRegisterScreen = ({ navigation }) => {
  const [putBook] = usePutBookMutation();

  const [title, setTitle] = useState("");
  const [longTitle, setLongTitle] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [subjects, setSubjects] = useState("");
  const [page, setPage] = useState(0);
  const [image, setImage] = useState(
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBO_kS5HnUUUdZ_nGIrCRkqLisodCiFiCjSlFyinAvUUYNPGxIg8zBX1ReqMdMBbPMjME&usqp=CAU"
  );
  const [edition, setEdition] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    putBook({
      book_data: {
        title,
        longTitle,
        sinopsis,
        subjects,
        page,
        image,
        edition,
        publishedDate,
        author,
      },
    });

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
    //refetch();
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
          style={styles.input}
          placeholder='Edicion'
          value={edition}
          onChangeText={setEdition}
        />
        <TextInput
          style={styles.input}
          placeholder='Autor'
          value={publishedDate}
          onChangeText={setPublishedDate}
        />

        <TextInput
          style={[styles.input, { height: 200 }]}
          multiline
          placeholder='Sinopsis'
          value={sinopsis}
          onChangeText={setSinopsis}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Cargar Libro</Text>
        </TouchableOpacity>
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
