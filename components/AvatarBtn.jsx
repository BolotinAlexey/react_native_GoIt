import { StyleSheet, TouchableOpacity } from "react-native";

export default AddBtn = ({ children }) => (
  <TouchableOpacity children title="" style={styles.btn}>
    {children}
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    position: "absolute",
    width: 24,
    height: 24,
    bottom: 24,
    right: -12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#FF6C00",
    borderRadius: 12,
  },
});
