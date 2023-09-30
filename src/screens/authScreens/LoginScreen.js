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
import { setUser, setIdToken } from "../../redux/slice/authSlice";
import { LoadingComponent } from "../../components/LoadingComponent";

import { themeColors } from "../../theme/commonStyles";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await signInWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );

      dispatch(setUser(response.user.email));
      dispatch(setIdToken(response._tokenResponse.idToken));
      if (response.user.email) setIsLoading(false);
    } catch (error) {
      console.log("LoginError: " + error.message);
    }
  };

  console.log(isLoading);
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
