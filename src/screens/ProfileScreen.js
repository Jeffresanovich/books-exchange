import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";

//Firebase
import { firebase_auth } from "../firebase/authFirebase";
import { signOut } from "firebase/auth";

//Styles
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { flex, border } from "../theme/commonStyles";

//Services
import {
  useGetUserByUidQuery,
  usePatchUserMutation,
} from "../services/bookApi";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { clearUserId } from "../redux/slice/userSlice";

//Cam and ImageGalery
import { openCam, openGalery } from "../hook/useImagePiker";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userSlice.id);
  const { data, isLoading, refetch } = useGetUserByUidQuery(userId);
  const [image, setImage] = useState(data.image);

  const [patchUser] = usePatchUserMutation();

  const handleOpenCam = async () => {
    const imageBase64 = await openCam(setImage);
    saveImage(imageBase64);
  };

  const handleOpenGalery = async () => {
    const imageBase64 = await openGalery(setImage);
    saveImage(imageBase64);
  };

  const saveImage = async (imageBase64) => {
    if (!!imageBase64) {
      await patchUser([
        userId,
        { image: `data:image/jpeg;base64,${imageBase64}` },
      ]);
      refetch();
    }
  };

  const handleSignOut = () => {
    Alert.alert(
      "CONFIRMAR",
      "¿Esta seguro que desea cerrar sesion en este dispositivo?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        { text: "Si", onPress: () => logout() },
      ]
    );
    const logout = () => {
      signOut(firebase_auth);
      dispatch(clearUserId());
    };
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='#65A6F6' />
      ) : (
        <>
          <Image source={{ uri: data.image }} style={styles.profileImage} />
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

          <Text style={styles.email}>{data.email}</Text>

          <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
            <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  email: {
    marginTop: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  editButtonText: {
    color: "white",
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: "red",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "white",
    fontSize: 16,
  },
});

export default ProfileScreen;
