import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import InputForm from "./InputForm";
import InputPassword from "./InputPassword";

export default FormLogin = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <InputForm
          autofocus
          placeholder={"Адреса електронної пошти"}
          keyboardType="email-address"
          inputMode="email"
        ></InputForm>

        <InputPassword></InputPassword>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
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
