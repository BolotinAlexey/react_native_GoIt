import { StyleSheet, Text, View, ImageBackground } from "react-native";
import Avatar from "../components/Avatar";

export default RegistrationScreen = () => (
  <ImageBackground
    source={require("../assets/images/Photo_BG.jpg")}
    style={styles.bg}
  >
    <View></View>
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
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#61dafb",
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
});
