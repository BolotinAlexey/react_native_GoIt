import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default InputForm = (props) => {
  const [focus, setFocus] = useState(false);
  const [text, setText] = useState("");

  return (
    <View>
      <TextInput
        {...props}
        value={text}
        onChangeText={setText}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          ...styles.input,
          borderColor: focus ? "#FF6C00" : "#BDBDBD",
        }}
        placeholderTextColor="#bdbdbd"
      >
        {props.children}
      </TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 7,
    fontFamily: "Roboto-Regular",
  },
});
