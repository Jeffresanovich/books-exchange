import { useState } from "react";

import {
  View,
  Text,
  Image,
  Switch,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";

//Styles
import { MaterialCommunityIcons, Feather } from "@expo/vector-icons";

//Services
import { usePatchUserCoordinatesMutation } from "../../services/bookApi";

//Custom Hook
import useGetLocation from "../../hook/useGetLocation";

import MapScreen from "../other/MapScreen";

const SettingScreen = () => {
  const {
    userId,
    isLoading,
    latitude,
    longitude,
    isSharingCoordinates,
    refetch,
  } = useGetUserData();

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
      <TouchableOpacity
        style={styles.saveCoordinatesButton}
        disabled={!isSharingCoordinates}
        onPress={handleSetUserCoordinates}
      >
        <Text style={styles.saveCoordinatesButtonText}>
          Compartir ubicacion actual
        </Text>
      </TouchableOpacity>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Compartir punto de intercambio</Text>
        <Switch
          value={shareExchangePoint}
          onValueChange={(value) => handleSetSharingCoordinates(value)}
          color='blue'
        />
      </View>

      <MapScreen
        disabled={isSharingCoordinates}
        title={"PUNTO DE INTERCAMBIO"}
        description={""}
        latitude={!isLoading && latitude}
        longitude={!isLoading && longitude}
      />
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
    marginBottom: 10,
  },
  settingText: {
    fontSize: 18,
  },
  saveCoordinatesButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 50,
    marginBottom: 15,
  },
  saveCoordinatesButtonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});

export default SettingScreen;
