import { useState } from "react";

import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { firebase_auth } from "../../firebase/authFirebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

import { themeColors } from "../../theme/commonStyles";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );
      console.log(response);

      navigation.navigate("Login");
    } catch (error) {
      console.log("RegisterError: " + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        placeholder='Escriba su email aquí..'
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

      <TouchableOpacity style={styles.button} onPress={() => handleRegister()}>
        <Text style={styles.buttonText}>Registrarse</Text>
      </TouchableOpacity>
      <Pressable onPress={() => navigation.navigate("Login")}>
        <Text style={styles.registroText}>
          Ya tienes cuenta? Iniciar Sesión
        </Text>
      </Pressable>
    </View>
  );
};

export default RegisterScreen;

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
    color: themeColors.heavyBlue,
  },
});
