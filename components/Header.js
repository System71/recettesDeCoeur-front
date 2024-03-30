import { Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <Image
      style={styles.headerLogo}
      source={require("../assets/logo.png")}
    ></Image>
  );
};

const styles = StyleSheet.create({
  headerLogo: {
    height: 60,
    width: 60,
    resizeMode: "contain",
  },
});

export default Header;
