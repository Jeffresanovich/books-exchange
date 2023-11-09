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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { flex } from "../../theme/commonStyles";

//Services
import { usePatchUserMutation } from "../../services/bookApi";

//Redux
import { useDispatch } from "react-redux";
import { clearUserId } from "../../redux/slice/userSlice";

//Custom hook
import { openCam, openGalery } from "../../hook/useImagePiker";
import { removeUserIdFromStorage } from "../../hook/useAsyncStorage";
import useGetUserData from "../../hook/useGetUserData";

const ProfileScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  //Get data user from firebase
  const { userId, isLoading, image, email, refetch } = useGetUserData();

  //Save data user to firebase
  const [patchUser] = usePatchUserMutation();

  //Custom hook to open the cam
  const handleOpenCam = async () => {
    const imageBase64 = await openCam();
    saveImage(imageBase64);
  };
  //Custom hook to open the galery
  const handleOpenGalery = async () => {
    const imageBase64 = await openGalery();
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
      navigation.navigate("TabNavigation");
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
