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
import { clearUser } from "../redux/slice/userSlice";

//Firebase
import { firebase_auth } from "../firebase/authFirebase";
import { signOut } from "firebase/auth";

//Styles
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { flex, border } from "../theme/commonStyles";

//Cam and ImageGalery
import * as ImagePicker from "expo-image-picker";

//Services
import {
  useGetUserByUidQuery,
  usePatchUserMutation,
} from "../services/bookApi";

//Redux
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.userSlice.userId);
  const { data, isLoading, refetch } = useGetUserByUidQuery(userId);
  const [editVisible, setEditVisible] = useState(false);
  const [patchUser] = usePatchUserMutation();

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
      await patchUser([
        userId,
        { image: `data:image/jpeg;base64,${result.assets[0].base64}` },
      ]);
    }
    refetch();
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
          <Image source={{ uri: data.image }} style={styles.profileImage} />
          <View style={styles.imageEdit}>
            {editVisible ? (
              <View style={styles.openCamGaleryContainer}>
                <TouchableOpacity onPress={handleOpenCam}>
                  <MaterialCommunityIcons
                    name='camera'
                    size={35}
                    color='grey'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setEditVisible(false)}>
                  <MaterialCommunityIcons
                    name='window-close'
                    size={30}
                    color='grey'
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOpenGalery}>
                  <MaterialCommunityIcons
                    name='folder-image'
                    size={35}
                    color='grey'
                  />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity onPress={() => setEditVisible(true)}>
                <Feather name='edit-2' size={30} color='grey' />
              </TouchableOpacity>
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
