import { ActivityIndicator, View } from "react-native";

import MapView, { Marker } from "react-native-maps";

import { useSelector } from "react-redux";
import { useGetUserByUidQuery } from "../../services/bookApi";

const MapScreen = () => {
  const userId = useSelector((state) => state.userSlice.id);

  const { data, isLoading } = useGetUserByUidQuery(userId);

  const { firstName, lastName, email, exchangePoint } = data;
  const { latitude, longitude, placeName } = exchangePoint;

  /*
  //CORDOBA
  const coordinate = {
    latitude: -31.4135,
    longitude: -64.18105,
  };
*/
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
