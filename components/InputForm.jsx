import { StyleSheet, TextInput, View } from "react-native";

export default InputForm = ({ placeholder }) => (
  <View>
    <TextInput style={styles.input} placeholder={placeholder}></TextInput>
  </View>
);

const styles = StyleSheet.create({
  input: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#BDBDBD",
    borderRadius: 7,
  },
});
