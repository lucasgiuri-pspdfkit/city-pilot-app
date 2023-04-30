import React, { useEffect, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, Image, View, Dimensions } from "react-native";
import { colors } from "../../assets/constants";

type Location = {
  latitude: number;
  longitude: number;
  title?: string;
  description?: string;
};
interface Props {
  currentLocation: Location;
  locations: Location[];
  latitudeDelta: number;
  longitudeDelta: number;
}

const Map = ({
  currentLocation,
  locations,
  latitudeDelta,
  longitudeDelta,
}: Props) => {
  const { latitude, longitude } = currentLocation;
  const [orderedLocations, setOrderedLocations] = useState<Location[]>([]);
  const originCasa = { latitude: 41.373974, longitude: 2.117263 };
  const origin = { longitude: 2.15638, latitude: 41.39137 };
  const GOOGLE_KEY = process.env.GOOGLE_KEY;

  const orderByNearest = (locations: Location[]) => {
    const orderedLocations = locations.sort((a, b) => {
      const distanceA = Math.sqrt(
        Math.pow(a.latitude - latitude, 2) +
          Math.pow(a.longitude - longitude, 2)
      );
      const distanceB = Math.sqrt(
        Math.pow(b.latitude - latitude, 2) +
          Math.pow(b.longitude - longitude, 2)
      );
      return distanceA - distanceB;
    });
    return orderedLocations;
  };

  useEffect(() => {
    const newLocations = orderByNearest(locations);
    setOrderedLocations(newLocations);
  }, []);

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
        apikey={GOOGLE_KEY}
        strokeWidth={8}
        strokeColor={colors.orange}
        origin={origin}
        destination={orderedLocations[0]}
      />

      <MapViewDirections
        apikey={GOOGLE_KEY}
        strokeWidth={8}
        strokeColor={colors.orange}
        origin={orderedLocations[0]}
        destination={orderedLocations[1]}
      />

      <MapViewDirections
        apikey={GOOGLE_KEY}
        strokeWidth={8}
        strokeColor={colors.orange}
        origin={orderedLocations[1]}
        destination={orderedLocations[2]}
      />
      <MapViewDirections
        apikey={GOOGLE_KEY}
        strokeWidth={8}
        strokeColor={colors.orange}
        origin={orderedLocations[2]}
        destination={orderedLocations[3]}
      />
      {orderedLocations.length > 0 &&
        orderedLocations.map((location, index) => (
          <View key={index}>
            {/* {index === 0 && (
              <MapViewDirections
                splitWaypoints
                mode="WALKING"
                strokeWidth={8}
                apikey={GOOGLE_KEY}
                strokeColor={colors.orange}
                origin={origin}
                destination={orderedLocations[0]}
              />
            )}
            {index !== 0 && (
              )} */}
            {/* <MapViewDirections
                mode="WALKING"
                strokeWidth={8}
                apikey={GOOGLE_KEY}
                strokeColor={colors.orange}
                origin={index === 0 ? origin : orderedLocations[index - 1]}
                destination={orderedLocations[index]}
              /> */}
            <Marker
              coordinate={location}
              title={location.title}
              description={location.description}
            >
              <Image
                style={{ width: 40, height: 60 }}
                source={require("../../assets/icons/marker.png")}
              />
            </Marker>
          </View>
        ))}
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
