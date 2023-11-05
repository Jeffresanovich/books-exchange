import { ActivityIndicator, View } from "react-native";

import MapView, { Marker } from "react-native-maps";

import useGetUserData from "../../hook/useGetUserData";

const MapScreen = () => {
  const { isLoading, firstName, lastName, email, latitude, longitude } =
    useGetUserData();

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <ActivityIndicator size='large' color='grey' />
      ) : (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.02, //0.0922,
            longitudeDelta: 0.01, //0.0421,
          }}
        >
          <Marker
            //image={{ uri: data.image }}
            coordinate={{ latitude, longitude }}
            title={`${firstName} ${lastName}`}
            description={`(Punto de intercambio)`}
          />
        </MapView>
      )}
    </View>
  );
};

export default MapScreen;
