import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Menu, Divider, Provider } from "react-native-paper";

type Props = {
  isVisible: boolean;
  onHandleMenu: (visible: boolean) => void;
};

const MenuCmp = ({ isVisible, onHandleMenu }: Props) => {
  return (
    <Provider>
      <View style={styles.container}>
        <Text style={styles.text}>City Pilot</Text>
        <Menu
          visible={isVisible}
          onDismiss={() => onHandleMenu(false)}
          anchor={<Button onPress={() => onHandleMenu(true)}>Show menu</Button>}
        >
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
  },
});

export default MenuCmp;
