import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

export default InputForm = (props) => {
  const [focus, setFocus] = useState(false);

  function onFocus(e) {
    setFocus(true);
  }
  function onBlur(e) {
    setFocus(false);
  }
  return (
    <View>
      <TextInput
        {...props}
        onFocus={onFocus}
        onBlur={onBlur}
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
