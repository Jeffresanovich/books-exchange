import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Modal } from "react-native";

import { useGetUserByUidQuery } from "../services/bookApi";

const UserDetailsComponent = ({ userId }) => {
  const { data, isLoading, isSuccess } = useGetUserByUidQuery(userId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DATOS DE CONTACTO</Text>
      {isSuccess && (
        <>
          <View style={styles.userContainer}>
            <Text style={styles.label}>Nombre: </Text>
            <Text style={styles.value}>
              {data.firstName} {data.lastName}
            </Text>
            <Text style={styles.label}>Correo electrónico: </Text>
            <Text style={styles.value}>{data.email}</Text>
          </View>
        </>
      )}
    </View>
  );
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
