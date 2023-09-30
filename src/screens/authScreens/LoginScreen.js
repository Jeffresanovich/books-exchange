import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { firebase_auth } from "../../firebase/authFirebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useDispatch } from "react-redux";
import { setUser, setIdToken, clearUser } from "../../redux/slice/authSlice";

import { themeColors } from "../../theme/commonStyles";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );

      //console.log(response);
      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));
    } catch (error) {
      console.log("LoginError: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      <TextInput
        placeholder='Nombre de usuario'
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        placeholder='Contraseña'
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("Register")}>
        <Text style={styles.registroText}>No tienes cuenta? Registrate</Text>
      </Pressable>
      <Pressable onPress={() => dispatch(clearUser())}>
        <Text style={styles.registroText}>Salir</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "85%",
    height: 50,
    borderColor: themeColors.mediumBlue,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 17,
  },
  button: {
    backgroundColor: themeColors.mediumBlue,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
  },
  registroText: {
    marginTop: 30,
    fontSize: 18,
    color: themeColors.mediumBlue,
  },
});
