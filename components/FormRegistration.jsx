import { StyleSheet, View } from "react-native";
import InputForm from "./InputForm";

export default FormRegistration = () => (
  <View style={styles.container}>
    <InputForm placeholder={"Логін"}></InputForm>
    <InputForm placeholder={"Адреса електронної пошти"}></InputForm>
    <InputForm placeholder={"Пароль"}></InputForm>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 16,
  },
});
