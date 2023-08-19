import { StyleSheet, TextInput, View } from "react-native";

export default InputForm = (props) => (
  <View>
    <TextInput {...props} style={styles.input} placeholderTextColor="#bdbdbd">
      {props.children}
    </TextInput>
  </View>
);

const styles = StyleSheet.create({
  input: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 7,
    fontFamily: "Roboto-Medium",
  },
});
