import { StyleSheet, ImageBackground } from "react-native";
import LoginWindow from "../components/LoginWindow";

export default LoginScreen = () => (
  <ImageBackground
    source={require("../assets/images/Photo_BG.jpg")}
    style={styles.bg}
  >
    <LoginWindow></LoginWindow>
  </ImageBackground>
);

const styles = StyleSheet.create({
  avatar: {
    position: "relative",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  bg: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
  },
});
