import { useState } from "react";

import { View, Text, Switch, StyleSheet, TouchableOpacity } from "react-native";
//Styles
import { MaterialCommunityIcons } from "@expo/vector-icons";

//Services
import { usePatchUserCoordinatesMutation } from "../../services/bookApi";

//Custom Hook
import useGetLocation from "../../hook/useGetLocation";
import useGetUserData from "../../hook/useGetUserData";

//Componets
import MapComponent from "../../components/MapComponent";

const SettingScreen = () => {
  //Get user data from cuntom hook
  const {
    userId,
    firstName,
    lastName,
    isFetching,
    latitude,
    longitude,
    isSharingCoordinates,
    refetch,
  } = useGetUserData();

  //Get location from cuntom hook
  const { currentLatitude, currentLongitude, isGranted } = useGetLocation();

  //Load the decision to share the exchange point
  const [shareExchangePoint, setShareExchangePoint] =
    useState(isSharingCoordinates);
  //
  const [patchUserCoordinates] = usePatchUserCoordinatesMutation();

  //Switch to the sharing exchange point
  const handleSetSharingCoordinates = async (value) => {
    setShareExchangePoint(value);
    await patchUserCoordinates([userId, { isSharingCoordinates: value }]);
    refetch();
  };

  //Save de current location button
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
        <Text style={styles.settingText}>Coincidir con ubicacion actual</Text>

        <TouchableOpacity
          style={[
            styles.buttonCurrentLocation,
            { backgroundColor: isGranted ? "red" : "grey" },
          ]}
          disabled={!isGranted}
          onPress={handleSetUserCoordinates}
        >
          <MaterialCommunityIcons
            name='map-marker-radius'
            size={40}
            color='white'
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
      {!isFetching && isSharingCoordinates && (
        <MapComponent
          name={`${firstName} ${lastName}`}
          latitude={latitude}
          longitude={longitude}
        />
      )}
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
