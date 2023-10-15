import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
  Alert,
} from "react-native";

//Redux
import { useDispatch } from "react-redux";
import { clearUser } from "../redux/slice/authSlice";

//Firebase
import { firebase_auth } from "../firebase/authFirebase";
import { signOut } from "firebase/auth";

//Styles
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { flex, border } from "../theme/commonStyles";

//Cam and ImageGalery
import * as ImagePicker from "expo-image-picker";

//Services
import { useGetUserByIdQuery, usePatchUserMutation } from "../services/bookApi";

const ProfileScreen = () => {
  const userId = 0;

  const dispatch = useDispatch();

  const [patchUser, result] = usePatchUserMutation();

  const { data, isLoading, refetch } = useGetUserByIdQuery(userId);

  const [image, setImage] = useState("");

  const [editVisible, setEditVisible] = useState(false);

  const handleEditImage = () => {
    setEditVisible(true);
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
    setEditVisible(false);
  };

  const handleOpenGalery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
      base64: true,
    });
    changeImage(result);
    setEditVisible(false);
  };

  const changeImage = async (result) => {
    if (!result.canceled) {
      await setImage(`data:image/jpeg;base64,${result.assets[0].base64}`);
      patchUser([userId, { image: image }]);
      refetch();
    }
  };

  const handleSignOut = () => {
    signOut(firebase_auth);
    dispatch(clearUser());
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size='large' color='#65A6F6' />
      ) : (
        <>
          <Image
            source={{
              uri: data
                ? data.image
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYqXjw6IR_opev4UADLjT8TPcLmWYQsx_YQ&usqp=CAU",
            }}
            style={styles.profileImage}
          />
          <View style={styles.imageEdit}>
            {editVisible ? (
              <View style={styles.openCamGaleryContainer}>
                <Pressable onPress={handleOpenCam}>
                  <MaterialCommunityIcons
                    name='camera'
                    size={35}
                    color='grey'
                  />
                </Pressable>
                <Pressable onPress={() => setEditVisible(false)}>
                  <MaterialCommunityIcons
                    style={{ marginHorizontal: 40 }}
                    name='window-close'
                    size={25}
                    color='grey'
                  />
                </Pressable>
                <Pressable onPress={handleOpenGalery}>
                  <MaterialCommunityIcons
                    name='folder-image'
                    size={35}
                    color='grey'
                  />
                </Pressable>
              </View>
            ) : (
              <Pressable onPress={() => setEditVisible(true)}>
                <Feather name='edit-2' size={25} color='grey' />
              </Pressable>
            )}
          </View>
          <Text style={styles.username}>
            {data.first_name} {data.last_name}
          </Text>
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
    alignItems: "center",
    padding: 50,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  imageEdit: {
    width: 150,
    height: 35,
    marginBottom: 10,
    alignItems: "center",
    //...border(),
  },
  openCamGaleryContainer: {
    ...flex("center", "center"),
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  email: {
    marginTop: 10,
    fontSize: 18,
    marginBottom: 20,
  },
  editButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
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
