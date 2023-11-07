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
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Services
import { usePatchUserCoordinatesMutation } from "../../services/bookApi";

//Custom Hook
import useGetLocation from "../../hook/useGetLocation";

import MapComponent from "../../components/MapComponent";
import useGetUserData from "../../hook/useGetUserData";

const SettingScreen = () => {
  const {
    userId,
    firstName,
    lastName,
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
      <View style={styles.setting}>
        <Text style={styles.settingText}>Compartir punto de intercambio</Text>
        <Switch
          value={shareExchangePoint}
          onValueChange={(value) => handleSetSharingCoordinates(value)}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Coincidir con ubicacion actual</Text>

        <TouchableOpacity
          style={[
            styles.buttonCurrentLocation,
            { backgroundColor: isSharingCoordinates ? "red" : "grey" },
          ]}
          disabled={!isSharingCoordinates}
          onPress={handleSetUserCoordinates}
        >
          <MaterialCommunityIcons
            name='map-marker-radius'
            size={40}
            color='white'
          />
        </TouchableOpacity>
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

  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  settingText: {
    fontSize: 18,
  },
  buttonCurrentLocation: {
    backgroundColor: "red",
    borderRadius: 10,
  },
});

export default SettingScreen;
