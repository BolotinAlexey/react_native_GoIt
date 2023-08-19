import { Platform, StyleSheet, Text, View } from "react-native";
import InputForm from "./InputForm";

export default FormRegistration = () => (
  <View style={styles.container}>
    <InputForm autofocus placeholder={"Логін"}></InputForm>
    <InputForm
      placeholder={"Адреса електронної пошти"}
      keyboardType="email-address"
    ></InputForm>
    <View style={styles.passwordInputWrap}>
      <InputForm placeholder={"Пароль"} secureTextEntry={true}></InputForm>
      <Text style={styles.passwordInputText}>Показати</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
  passwordInputWrap: {
    position: "relative",
  },
  passwordInputText: {
    position: "absolute",
    padding: 6,
    right: 0,
    top: Platform.OS === "ios" ? 10 : 13,
    color: "#1B4371",
    fontSize: 16,
  },
});
