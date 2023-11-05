import { useState } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";

export default useGetLocation = async () => {
  const [location, setLocation] = useState({
    latitude: -31.4135,
    longitude: -64.18105,
  });

  try {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "ATENCION!",
        "La app no tiene permiso para acceder a la localizacion"
      );
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  } catch (error) {
    console.error("Error getting location: ", error);
  }
  return location;
};
