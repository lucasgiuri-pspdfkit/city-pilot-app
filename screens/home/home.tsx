import React, { useEffect, useState } from "react";
import Map from "../../components/map/map";
import * as Location from "expo-location";
import { StyleSheet, Dimensions, Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
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
            latitude={latitude}
            longitude={longitude}
            latitudeDelta={0.0922}
            longitudeDelta={0.0421}
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
