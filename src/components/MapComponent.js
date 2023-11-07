import { View } from "react-native";

import MapView, { Marker } from "react-native-maps";

const MapComponent = ({ name, latitude, longitude }) => {
  return (
    <View style={{ flex: 1 }}>
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
          coordinate={{ latitude, longitude }}
          title='PUNTO DE INTERCAMBIO'
          description={`Usuario: ${name}`}
        />
      </MapView>
    </View>
  );
};

export default MapComponent;
