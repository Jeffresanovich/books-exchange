import { useState } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

import MapScreen from "../other/MapScreen";

const SettingScreen = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);
  const [shareExchangePoint, setShareExchangePoint] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Notificaciones</Text>
        <Switch
          value={notificationsEnabled}
          onValueChange={(value) => setNotificationsEnabled(value)}
          color='green'
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Modo oscuro</Text>
        <Switch
          value={darkModeEnabled}
          onValueChange={(value) => setDarkModeEnabled(value)}
          color='black'
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Compartir punto de intercambio</Text>
        <Switch
          value={shareExchangePoint}
          onValueChange={(value) => setShareExchangePoint(value)}
          color='blue'
        />
      </View>

      <MapScreen />
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
