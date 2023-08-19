import { StyleSheet, View, TouchableOpacity } from "react-native";
import AvatarBtn from "./AvatarBtn";

export default AddBtn = () => (
  <AvatarBtn>
    <View style={styles.deg45}></View>
    <View style={styles.deg135}></View>
  </AvatarBtn>
);

const styles = StyleSheet.create({
  deg45: {
    position: "absolute",
    top: 10,
    left: 3,
    width: 16,
    height: 1,
    backgroundColor: "#FF6C00",
    transform: "rotate(45deg)",
  },
  deg135: {
    position: "absolute",
    top: 10,
    left: 3,
    width: 16,
    height: 1,
    backgroundColor: "#FF6C00",
    transform: "rotate(-45deg)",
  },
});
