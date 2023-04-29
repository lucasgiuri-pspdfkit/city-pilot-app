import { Image, View, Text, StyleSheet, Dimensions } from "react-native";
import { colors } from "../../assets/constants";

const Logo = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/icons/logo.png")}
        />
        <Image
          style={styles.bars}
          source={require("../../assets/icons/bars.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    width: "100%",
    height: 110,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: colors.blue,
  },
  logoContainer : {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  image: { width: 170, height: 35 },
  bars: { width: 22, height: 22 },
  text: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 24,
    paddingLeft: 10,
  },
});

export default Logo;
