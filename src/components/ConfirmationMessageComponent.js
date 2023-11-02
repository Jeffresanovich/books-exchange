import React, { useState } from "react";
import { Alert, Button, View, StyleSheet } from "react-native";

const ConfirmationMessageComponent = (
  action,
  confirmationMessage,
  afirmativeAction
) => {
  const cerrarSesion = () => {
    // Aquí iría la lógica para cerrar la sesión
    // ...
  };

  const confirmationMessage = () =>
    Alert.alert(
      "Confirmar",
      `¿Estás seguro de que deseas ${action}?`,
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        { text: "Sí", onPress: () => cerrarSesion() },
      ],
      { cancelable: false }
    );

  return (
    <View style={styles.container}>
      <Button title='Cerrar Sesión' onPress={mostrarConfirmacion} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ConfirmationMessageComponent;
