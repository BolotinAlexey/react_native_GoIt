import { StyleSheet, View } from "react-native";
import AvatarBtn from "./AvatarBtn";

export default AddBtn = () => (
  <AvatarBtn>
    <View style={styles.deg90}></View>
    <View style={styles.deg0}></View>
  </AvatarBtn>
);

const styles = StyleSheet.create({
  deg90: {
    position: "absolute",
    top: 10,
    left: 3,
    width: 16,
    height: 1,
    backgroundColor: "#FF6C00",
    transform: "rotate(90deg)",
  },
  deg0: {
    position: "absolute",
    top: 10,
    left: 3,
    width: 16,
    height: 1,
    backgroundColor: "#FF6C00",
  },
});
