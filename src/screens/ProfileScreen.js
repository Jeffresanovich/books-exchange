import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { Entypo, FontAwesome, Feather } from "@expo/vector-icons";
import { themeColors } from "../theme/commonStyles";

import { useDispatch } from "react-redux";
import { clearUser } from "../redux/slice/authSlice";

import { firebase_auth } from "../firebase/authFirebase";
import { signOut } from "firebase/auth";

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }} // Cambia la URL por la imagen de perfil real
        style={styles.profileImage}
      />
      <Text style={styles.username}>Nombre de Usuario</Text>
      <Text style={styles.email}>correo@ejemplo.com</Text>
      <TouchableOpacity style={styles.editButton}>
        <Text style={styles.editButtonText}>Editar perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  email: {
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
