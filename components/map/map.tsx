import React from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../assets/constants";

interface Props {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

const Map = ({ latitude, longitude, latitudeDelta, longitudeDelta }: Props) => {
  const origin = { latitude: 41.373974, longitude: 2.117263 };
  const a = { latitude: 41.375412, longitude: 2.150150};
  const destination = { latitude: 41.4036, longitude: 2.1744 };
  const GOOGLE_MAPS_APIKEY = process.env.GOOGLE_API_KEY;

  return (
    <MapView
      userInterfaceStyle="dark"
      style={styles.map}
      showsMyLocationButton={true}
      showsUserLocation={true}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta,
        longitudeDelta,
      }}
    >
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
        strokeWidth={8}
        strokeColor={colors.orange}
      />
      <Marker
        coordinate={destination}
        title={"Sagrada Familia"}
        description={"description"}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
    height: Dimensions.get("window").height,
    width: Dimensions.get("window").width,
  },
});

export default Map;
