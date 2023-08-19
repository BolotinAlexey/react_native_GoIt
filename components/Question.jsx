import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default Question = ({ txt, btn, isRegister }) => (
  <View style={styles.container}>
    <Text style={styles.txt}>{txt}</Text>

    <TouchableOpacity style={styles.btn}>
      <Text
        style={{
          ...styles.txt,
          paddingHorizontal: 10,
          textDecorationLine: isRegister ? "underline" : "none",
        }}
      >
        {btn}
      </Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
  passwordInputWrap: {
    position: "relative",
  },
  txt: {
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
  // passwordInputText: {
  //   top: Platform.OS === "ios" ? 10 : 13,
  //   color: "#1B4371",
  //   fontSize: 16,
  // },
});
