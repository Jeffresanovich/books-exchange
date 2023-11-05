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
import { firebase_auth } from "../../firebase/authFirebase";
import { signOut } from "firebase/auth";

//Styles
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { flex, border } from "../../theme/commonStyles";

//Services
import {
  useGetUserByUidQuery,
  usePatchUserCoordinatesMutation,
  usePatchUserMutation,
} from "../../services/bookApi";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { clearUserId } from "../../redux/slice/userSlice";

//Cam and ImageGalery
import { openCam, openGalery } from "../../hook/useImagePiker";

import { removeUserIdFromStorage } from "../../hook/useAsyncStorage";

import * as Location from "expo-location";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  //extraer en un hook //TODO
  const userId = useSelector((state) => state.userSlice.id);
  const { data, isLoading, refetch } = useGetUserByUidQuery(userId);
  const { image, firstName, lastName, email, exchangePoint } = data;
  const { latitude, longitude, placeName, isSharing } = exchangePoint;

  const [location, setLocation] = useState({});

  const [patchUser] = usePatchUserMutation();
  const [patchUserCoordinates] = usePatchUserCoordinatesMutation();

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "ATENCION!",
          "La app no tiene permiso para acceder a la localizacion"
        );
        return;
      }

      const locationResponse = await Location.getCurrentPositionAsync({});
      setLocation(locationResponse);

      console.log("LOCATION: ", JSON.stringify(location, null, " "));
    } catch (error) {
      console.error("Error getting location: ", error);
    }
  };

  const handleOpenCam = async () => {
    const imageBase64 = await openCam();
    saveImage(imageBase64);
  };

  const handleOpenGalery = async () => {
    const imageBase64 = await openGalery();
    saveImage(imageBase64);
  };

  const saveImage = async (imageBase64) => {
    //REVISAR: la doble negacion aqui
    if (!!imageBase64) {
      await patchUser([
        userId,
        { image: `data:image/jpeg;base64,${imageBase64}` },
      ]);
      refetch();
    }
  };

  const handleSetUserCoordinates = async () => {
    const setUserCoordinates = {
      //placeName: "",
      latitude: location.coords.latitude, //-31.4135, //Logica para que actualice coordenadas o las mantega
      longitude: location.coords.longitude, //-64.18105,
      isSharing: true,
    };
    getLocation();

    await patchUserCoordinates([
      userId,
      isSharing
        ? {
            isSharing: false,
          }
        : setUserCoordinates,
    ]);
    refetch();
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
      dispatch(clearUserId());
      removeUserIdFromStorage();
      signOut(firebase_auth);
    };
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='#65A6F6' />
      ) : (
        <>
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
          <View style={styles.openCamGaleryContainer}>
            <TouchableOpacity onPress={handleSetUserCoordinates}>
              <MaterialCommunityIcons
                name={isSharing ? "map-marker-remove" : "map-marker-plus"}
                size={35}
                color={isSharing ? "red" : "green"}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.email}>{email}</Text>

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
