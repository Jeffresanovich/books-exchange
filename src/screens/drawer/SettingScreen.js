import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

import MapComponent from "../../components/MapComponent";
import useGetUserData from "../../hook/useGetUserData";

const SettingScreen = () => {
  const {
    userId,
    isLoading,
    firstName,
    lastName,
    latitude,
    longitude,
    isSharing,
    refetch,
  } = useGetUserData();
  const [notificationsEnabled, setNotificationsEnabled] = React.useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Notificaciones</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Modo oscuro</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={(value) => setDarkModeEnabled(value)}
          color='red'
        />
      </View>

      <MapComponent
        name={`${firstName} ${lastName}`}
        latitude={latitude}
        longitude={longitude}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingScreen;
