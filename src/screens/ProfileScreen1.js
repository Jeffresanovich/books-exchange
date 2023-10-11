import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import { Entypo, FontAwesome, Feather } from "@expo/vector-icons";
import { themeColors } from "../theme/commonStyles";

import { useDispatch } from "react-redux";
import { clearUser } from "../redux/slice/authSlice";

import { firebase_auth } from "../firebase/authFirebase";
import { signOut } from "firebase/auth";

const ProfileScreen = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(firebase_auth);
    dispatch(clearUser());
  };
  return (
    <View>
      <View style={{ alignItems: "center", marginTop: 15 }}>
        <Image
          style={styles.imagen}
          source={{
            uri: "https://img.freepik.com/premium-vector/woman-avatar-profile-round-icon_24640-14047.jpg?w=2000",
          }}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("abrir camara..")}
            >
              <Entypo name='camera' size={24} color='black' />
            </Pressable>
            <Text style={styles.textButton}>Abrir Cámara</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("abrir galería de fotos..")}
            >
              <FontAwesome name='photo' size={24} color='black' />
            </Pressable>
            <Text style={styles.textButton}>Abrir Galería de fotos</Text>
          </View>
          <View style={styles.containerButton}>
            <Pressable
              style={styles.containerIcon}
              onPress={() => console.log("abrir mapa..")}
            >
              <Feather name='map' size={24} color='black' />
            </Pressable>
            <Text style={styles.textButton}>Abrir Mapa</Text>
          </View>
          <Pressable onPress={() => handleSignOut()}>
            <Text style={{ color: "blue" }}>Cerrar Sesion</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 10,
  },
  containerButton: {
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  containerIcon: {
    borderWidth: 2,
    padding: 5,
    borderRadius: 8,
    borderColor: themeColors.heavyBlue,
  },
  textButton: {
    marginLeft: 15,

    fontSize: 20,
  },
});
