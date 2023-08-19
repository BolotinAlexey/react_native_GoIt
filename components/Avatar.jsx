import { StyleSheet, View } from "react-native";
import AddBtn from "./AddBtn";

export default Avatar = () => (
  <View style={styles.avatar}>
    <AddBtn></AddBtn>
  </View>
);

const styles = StyleSheet.create({
  avatar: {
    position: "relative",
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
});
