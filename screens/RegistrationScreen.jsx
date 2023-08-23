import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import Avatar from "../components/Avatar";
import RegistrationWindow from "../components/RegistrationWindow";

export default RegistrationScreen = ({ chooseScreen }) => (
  <ImageBackground
    source={require("../assets/images/Photo_BG.jpg")}
    style={styles.bg}
  >
    <KeyboardAvoidingView
      style={styles.wrap}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <RegistrationWindow chooseScreen={chooseScreen}></RegistrationWindow>
      <Avatar></Avatar>
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  wrap: {
    flexDirection: "column-reverse",
    alignItems: "center",
  },
});
