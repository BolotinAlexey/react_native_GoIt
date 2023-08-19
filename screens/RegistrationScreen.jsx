import { StyleSheet, ImageBackground } from "react-native";
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
  bg: {
    flex: 1,
    flexDirection: "column-reverse",
    alignItems: "center",
  },
});
