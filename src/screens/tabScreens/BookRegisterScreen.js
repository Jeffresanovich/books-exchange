import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

//Styles
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { flex, border } from "../../theme/commonStyles";

//Cam and ImageGalery
import * as ImagePicker from "expo-image-picker";

//Services
import {
  useGetUserByUidQuery,
  usePatchUserMutation,
} from "../../services/bookApi";

//Redux
import { useSelector } from "react-redux";

const BookRegisterScreen = ({ navigation }) => {
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");
  const [genero, setGenero] = useState("");
  const [sinopsis, setSinopsis] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = () => {
    // Lógica para enviar la información del libro
  };

  const handleOpenCam = async () => {
    /*
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
    */
  };

  const handleOpenGalery = async () => {
    /*
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });
    changeImage(result);
   */
  };

  const changeImage = async (result) => {
    /* if (!result.canceled) {
      await patchUser([
        userId,
        { image: `data:image/jpeg;base64,${result.assets[0].base64}` },
      ]);
    }
    refetch();*/
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Cargar un Nuevo Libro</Text>
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
        placeholder='Título del Libro'
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder='Autor'
        value={autor}
        onChangeText={setAutor}
      />
      <TextInput
        style={styles.input}
        placeholder='Género'
        value={genero}
        onChangeText={setGenero}
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
    width: 200,
    height: 200,
    borderRadius: 100,
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
