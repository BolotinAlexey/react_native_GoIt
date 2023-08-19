import { StyleSheet, View } from "react-native";
import TitleWindow from "./TitleWindow";
import FormRegistration from "./FormRegistration";
import BtnWindow from "./BtnWindow";
import Question from "./Question";

export default RegistrationWindow = () => (
  <View style={styles.window}>
    <TitleWindow>Реєстрація</TitleWindow>
    <FormRegistration></FormRegistration>
    <BtnWindow>Зареєстуватися</BtnWindow>
    <Question></Question>
  </View>
);

const styles = StyleSheet.create({
  window: {
    width: "100%",
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,

    backgroundColor: "#FFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
});
