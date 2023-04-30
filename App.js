import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign, Fontisto } from "@expo/vector-icons";
import SettingsScreen from "./screens/settings/settings";
import HomeScreen from "./screens/home/home";
import TourScreen from "./screens/tour/tour";
import "react-native-url-polyfill/auto";
import { colors } from "./assets/constants";
import Logo from "./components/logo/logo";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: colors.orange,
          tabBarInactiveTintColor: "white",
          header: (props) => <Logo title={props.children} />,
          headerTintColor: "white",
          headerStyle: {
            backgroundColor: colors.primary,
          },
          tabBarStyle: {
            backgroundColor: colors.primary,
          },
          tabBarIcon: ({ focused }) => {
            if (route.name === "Home") {
              if (focused) {
                return (
                  <Fontisto
                    name="map-marker-alt"
                    size={24}
                    color={colors.orange}
                  />
                );
              }
              return <Fontisto name="map-marker-alt" size={24} color="white" />;
            } else if (route.name === "Tour") {
              if (focused) {
                return (
                  <AntDesign
                    name="customerservice"
                    size={24}
                    color={colors.orange}
                  />
                );
              }
              return (
                <AntDesign name="customerservice" size={24} color="white" />
              );
            } else if (route.name === "Settings") {
              if (focused) {
                return (
                  <AntDesign name="setting" size={24} color={colors.orange} />
                );
              }
              return <AntDesign name="setting" size={24} color="white" />;
            }
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Tour" component={TourScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
