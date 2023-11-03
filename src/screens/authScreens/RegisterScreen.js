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

import { usePutUserMutation } from "../../services/bookApi";

import { useErrorMessage } from "../../hook/useErrorMessage";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const [errorText, setErrorText] = useState("");

  const [putUser] = usePutUserMutation();

  const handleRegister = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        firebase_auth,
        email,
        password
      );

      const userBody = {
        firstName,
        lastName,
        email: response.user.email,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYqXjw6IR_opev4UADLjT8TPcLmWYQsx_YQ&usqp=CAU",
        isActive: true,
        exchangePoint: {
          placeName: "Patio Olmos",
          latitude: 0,
          longitude: 0,
        },
      };

      putUser([response.user.uid, userBody]);

      navigation.navigate("Login");
    } catch (error) {
      console.log("Error: " + error.message);
      setErrorText(
        useErrorMessage(
          firstName === "" || lastName === ""
            ? "campo-obligatorio"
            : error.message
        )
      );
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
        placeholder='Nombre'
        style={styles.input}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <TextInput
        placeholder='Apellido'
        style={styles.input}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <TextInput
        placeholder='Email'
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleRegister()}
          >
            <Text style={styles.buttonText}>Registrarse</Text>
          </TouchableOpacity>
        </>
      )}
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
