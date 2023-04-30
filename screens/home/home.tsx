import React, { useEffect, useState } from "react";
import Map from "../../components/map/map";
import * as Location from "expo-location";
import { StyleSheet, Dimensions, Text, View } from "react-native";

const locations = [
  {
    latitude: 41.4036,
    longitude: 2.1744,
    title: "Sagrada Família",
    description: "Gaudí's Sagrada Família",
  },
  {
    latitude: 41.391,
    longitude: 2.1657,
    title: "Casa Batlló",
    description: "Gaudí's Casa Batlló",
  },
  {
    latitude: 41.3953,
    longitude: 2.1612,
    title: "La Pedrera (Casa Milà",
    description: "La Pedrera (Casa Milà",
  },
  {
    latitude: 41.4145,
    longitude: 2.1745,
    title: "Hospital de Sant Pau",
    description: "Hospital de Sant Pau",
  },
];

const HomeScreen = ({ navigation }) => {
  console.log("p", process.env.GOOGLE_API_KEY)
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let tmpLoc = await Location.getCurrentPositionAsync({});
      setLocation(tmpLoc);
    })();
  }, []);

  const latitude = location ? location.coords.latitude : 0;
  const longitude = location ? location.coords.longitude : 0;

  return (
    <View style={styles.container}>
      {location && !errorMsg ? (
        <View style={styles.mapContainer}>
          <Map
            currentLocation={{ latitude, longitude }}
            locations={locations}
            latitudeDelta={0.07}
            longitudeDelta={0.07}
          />
        </View>
      ) : (
        <Text style={styles.text}>{errorMsg}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 20,
  },
  mapContainer: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default HomeScreen;
