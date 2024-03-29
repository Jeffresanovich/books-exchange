import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
  ActivityIndicator,
} from "react-native";

//Style theme
import { themeColors } from "../../theme/commonStyles";

//Firebase
import { firebase_auth } from "../../firebase/authFirebase";
import { signInWithEmailAndPassword } from "firebase/auth";

//Redux
import { useDispatch } from "react-redux";
import { setUserId } from "../../redux/slice/userSlice";

//Custom Hook
import { useErrorMessage } from "../../hook/useErrorMessage";
import { saveUserIdFromStorage } from "../../hook/useAsyncStorage";

const LoginScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");
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

      //Save the user data to storage
      await saveUserIdFromStorage(response.user.uid);
      //Save the user data to redux state
      dispatch(setUserId(response.user.uid));

      setIsLoading(false);
    } catch (error) {
      console.log("Error: " + error.message);
      const errorMenssage =
        email === "" || password === "" ? "campo-obligatorio" : error.message;
      useErrorMessage(errorMenssage, setErrorText);
      setIsLoading(false);
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
      {isLoading ? (
        <ActivityIndicator size='large' color='#65A6F6' />
      ) : (
        <>
          <Text style={{ color: "red", marginBottom: 15 }}>{errorText}</Text>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </>
      )}
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
    borderColor: themeColors.heavyBlue,
    borderWidth: 2,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 17,
  },
  button: {
    backgroundColor: themeColors.heavyBlue,
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
