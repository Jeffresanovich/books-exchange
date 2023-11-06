import { useState } from "react";

import {
  View,
  Text,
  Switch,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";

//Styles
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

//Services
import { usePatchUserCoordinatesMutation } from "../../services/bookApi";

//Custom Hook
import useGetLocation from "../../hook/useGetLocation";

import MapScreen from "../other/MapScreen";
import useGetUserData from "../../hook/useGetUserData";

const SettingScreen = () => {
  const { userId, isSharingCoordinates, refetch } = useGetUserData();

  const { currentLatitude, currentLongitude } = useGetLocation();

  const [shareExchangePoint, setShareExchangePoint] =
    useState(isSharingCoordinates);

  const [patchUserCoordinates] = usePatchUserCoordinatesMutation();

  const handleSetSharingCoordinates = async (value) => {
    setShareExchangePoint(value);
    await patchUserCoordinates([userId, { isSharingCoordinates: value }]);
    refetch();
  };

  const handleSetUserCoordinates = async () => {
    const currentUserCoordinates = {
      latitude: currentLatitude,
      longitude: currentLongitude,
    };

    await patchUserCoordinates([userId, currentUserCoordinates]);
    refetch();
  };

  return (
    <View style={styles.container}>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Guardar ubicacion actual</Text>

        <TouchableOpacity
          style={styles.settingText}
          disabled={!isSharingCoordinates}
          onPress={handleSetUserCoordinates}
        >
          <MaterialCommunityIcons
            name='map-marker-plus'
            size={40}
            color={isSharingCoordinates ? "red" : "grey"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Compartir punto de intercambio</Text>
        <Switch
          value={shareExchangePoint}
          onValueChange={(value) => handleSetSharingCoordinates(value)}
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

  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
  },
  settingText: {
    fontSize: 18,
  },
  saveCoordinatesButton: {
    backgroundColor: "blue",
  },
});

export default SettingScreen;
