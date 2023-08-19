import { StyleSheet, View } from "react-native";
import AvatarBtn from "./AvatarBtn";

export default Avatar = () => (
  <View style={styles.avatar}>
    <AvatarBtn></AvatarBtn>
  </View>
);

const styles = StyleSheet.create({
  avatar: {
    position: "relative",
    top: -60,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
});
