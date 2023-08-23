import {
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import LoginWindow from "../components/LoginWindow";

export default LoginScreen = ({ chooseScreen }) => (
  <ImageBackground
    source={require("../assets/images/Photo_BG.jpg")}
    style={styles.bg}
  >
    <KeyboardAvoidingView
      style={styles.wrap}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <LoginWindow chooseScreen={chooseScreen}></LoginWindow>
    </KeyboardAvoidingView>
  </ImageBackground>
);

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "column-reverse",
    alignItems: "center",
  },
  bg: {
    flex: 1,
    justifyContent: "flex-end",}
});
