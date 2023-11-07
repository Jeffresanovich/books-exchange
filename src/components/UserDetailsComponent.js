import { View, Text, StyleSheet, Modal } from "react-native";

import { useGetUserByUidQuery } from "../services/bookApi";

import MapComponent from "./MapComponent";

const UserDetailsComponent = ({ userId }) => {
  const { data, isLoading } = useGetUserByUidQuery(userId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DATOS DE CONTACTO</Text>
      {!isLoading && (
        <>
          <View style={styles.userContainer}>
            <Text style={styles.label}>Nombre: </Text>
            <Text style={styles.value}>
              {data.firstName} {data.lastName}
            </Text>
            <Text style={styles.label}>Correo electrónico: </Text>
            <Text style={styles.value}>{data.email}</Text>
          </View>
          {data.exchangePoint.isSharingCoordinates && (
            <MapComponent
              name={`${data.firstName} ${data.lastName}`}
              latitude={data.exchangePoint.latitude}
              longitude={data.exchangePoint.longitude}
            />
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
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
