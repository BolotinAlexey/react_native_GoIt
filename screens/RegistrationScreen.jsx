import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Avatar from "../components/Avatar";
import RegistrationWindow from "../components/RegistrationWindow";

export default RegistrationScreen = () => (
  <ImageBackground
    source={require("../assets/images/Photo_BG.jpg")}
    style={styles.bg}
  >
    <RegistrationWindow></RegistrationWindow>
    <Avatar></Avatar>
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
