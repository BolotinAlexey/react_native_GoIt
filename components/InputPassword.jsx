import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import InputForm from "./InputForm";
import { useState } from "react";

export default FormLogin = () => {
  const [isShow, setIsShow] = useState(true);

  return (
    <View style={styles.passwordInputWrap}>
      <InputForm
        inputMode="text"
        placeholder={"Пароль"}
        secureTextEntry={isShow}
      ></InputForm>
      <TouchableOpacity style={styles.btn} onPress={() => setIsShow(!isShow)}>
        <Text style={styles.passwordInputText}>
          {isShow ? "Показати" : "Сховати"}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  passwordInputWrap: {
    position: "relative",
  },
  btn: {
    position: "absolute",
    padding: 10,
    right: 6,
  },
  passwordInputText: {
    // top: Platform.OS === "ios" ? 10 : 13,
    top: 6,
    color: "#1B4371",
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});
