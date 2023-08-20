import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import InputForm from "./InputForm";
import InputPassword from "./InputPassword";

export default FormRegistration = () => (
  <View style={styles.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <InputForm autofocus placeholder={"Логін"}></InputForm>
      <InputForm
        inputMode="email"
        placeholder={"Адреса електронної пошти"}
        keyboardType="email-address"
      ></InputForm>
      <InputPassword></InputPassword>
    </KeyboardAvoidingView>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
});
