import { StyleSheet, View } from "react-native";
import InputForm from "./InputForm";
import InputPassword from "./InputPassword";

export default FormRegistration = () => (
  <View style={styles.container}>
    <InputForm autofocus placeholder={"Логін"}></InputForm>
    <InputForm
      placeholder={"Адреса електронної пошти"}
      keyboardType="email-address"
    ></InputForm>
    <InputPassword></InputPassword>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
});
