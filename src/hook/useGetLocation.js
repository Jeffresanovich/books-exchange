import { useEffect, useState } from "react";
import { Alert } from "react-native";
import * as Location from "expo-location";

export default useGetLocation = () => {
  const [currentLatitude, setCurrentLatitude] = useState(-31);
  const [currentLongitude, setCurrentLongitude] = useState(-64);
  const [isGranted, setIsGranted] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "ATENCION!",
            "La app no tiene permiso para acceder a la localizacion"
          );
          setIsGranted(false);
          return;
        }

        const locationResponse = await Location.getCurrentPositionAsync({});
        setCurrentLatitude(locationResponse.coords.latitude);
        setCurrentLongitude(locationResponse.coords.longitude);
      } catch (error) {
        console.error("Error getting location: ", error);
      }
    })();
  }, []);
  return { currentLatitude, currentLongitude, isGranted };
};
