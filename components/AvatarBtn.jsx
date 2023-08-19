import { StyleSheet, TouchableOpacity, View } from "react-native";

export default AvatarBtn = ({ rotate }) => (
  <View
    style={{
      ...styles.btn,
      transform: rotate ? "rotate(45deg)" : "rotate(0deg)",
    }}
  >
    <TouchableOpacity>
      <View style={styles.deg90}></View>
      <View style={styles.deg0}></View>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    width: 24,
    height: 24,
    bottom: 24,
    right: -10,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 12,
  },
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
