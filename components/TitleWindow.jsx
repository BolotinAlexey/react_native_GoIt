import { StyleSheet, Text } from "react-native";

export default TitleWindow = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

const styles = StyleSheet.create({
  title: {
    marginBottom: 33,
    color: "#20232a",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Medium",
  },
});
