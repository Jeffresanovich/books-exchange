import { View, Text, StyleSheet, Modal } from "react-native";

//import useGetUserData from "../hook/useGetUserData";

const UserDetailsComponent = ({ userId }) => {
  /*const { firstName, lastName, email } = useGetUserData(userId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DATOS DE CONTACTO</Text>
      {isSuccess && (
        <>
          <View style={styles.userContainer}>
            <Text style={styles.label}>Nombre: </Text>
            <Text style={styles.value}>
              {firstName} {lastName}
            </Text>
            <Text style={styles.label}>Correo electrónico: </Text>
            <Text style={styles.value}>{email}</Text>
          </View>
        </>
      )}
    </View>
  );**/
};

const styles = StyleSheet.create({
  container: {
    /*
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    */
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },

  label: {
    fontWeight: "bold",
    width: 300,
  },
  value: {
    flex: 1,
  },
});

export default UserDetailsComponent;
