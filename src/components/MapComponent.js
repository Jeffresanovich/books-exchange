import { StyleSheet, View } from "react-native";

import MapView, { Marker } from "react-native-maps";

const MapComponent = ({ name, latitude, longitude }) => {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.02, //0.0922,
          longitudeDelta: 0.01, //0.0421,
        }}
        scrollEnabled={false}
        zoomEnabled={false}
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

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    margin: 10,
    width: "auto",
    height: 350,
    justifyContent: "center",
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
