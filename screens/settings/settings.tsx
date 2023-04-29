import React, { useState } from "react";
import Slider from "@react-native-community/slider";
import SelectDropdown from "react-native-select-dropdown";
import { Switch, Text, View, StyleSheet } from "react-native";
import { colors } from "../../assets/constants";

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const SettingsScreen = ({ navigation }) => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [locationEnabled, setLocationEnabled] = useState(true);
  const [language, setLanguage] = useState("en");
  const [fontSize, setFontSize] = useState(16);

  const [darkModeEnabled, setDarkModeEnabled] = useState(true);

  const handleNotificationsToggle = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
  };

  const handleFontSizeChange = (value) => {
    setFontSize(value);
  };

  const handleLocationToggle = () => {
    setLocationEnabled(!locationEnabled);
  };

  const handleDarkModeToggle = () => {
    setDarkModeEnabled(!darkModeEnabled);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.label}>Notifications</Text>
        <Switch
          onValueChange={handleNotificationsToggle}
          value={notificationsEnabled}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Location</Text>
        <Switch onValueChange={handleLocationToggle} value={locationEnabled} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch onValueChange={handleDarkModeToggle} value={darkModeEnabled} />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Language</Text>
        <SelectDropdown
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => selectedItem}
          rowTextForSelection={(item, index) => item}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.label}>Font Size</Text>
        <Slider
          style={styles.slider}
          value={fontSize}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={colors.white}
          maximumTrackTintColor={colors.white}
          onValueChange={handleFontSizeChange}
        />
        <Text style={styles.label}>{fontSize}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 22,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  slider: {
    backgroundColor: colors.blue,
    color: colors.white,
  },
  label: {
    fontSize: 20,
    color: colors.white,
  },
});

export default SettingsScreen;
