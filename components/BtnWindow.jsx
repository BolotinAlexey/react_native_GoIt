import { StyleSheet, TouchableOpacity, Text, View } from "react-native";

export default BtnWindow = ({ children }) => (
  <View>
    <TouchableOpacity style={styles.btnW}>
      <Text style={styles.txt}>{children}</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  btnW: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    marginTop: 43,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  txt: {
    fontFamily: "Roboto-Regular",
    color: "#fff",
  },
});
