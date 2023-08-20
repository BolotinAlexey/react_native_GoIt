import { StyleSheet, View } from "react-native";
import TitleWindow from "./TitleWindow";
import FormLogin from "./FormLogin";
import BtnWindow from "./BtnWindow";
import Question from "./Question";

export default LoginWindow = ({ chooseScreen }) => (
  <View style={styles.window}>
    <TitleWindow>Увійти</TitleWindow>
    <FormLogin></FormLogin>
    <BtnWindow>Увійти</BtnWindow>
    <Question
      txt="Немає акаунту?"
      btn="Зареєструватися"
      isRegister
      chooseScreen={chooseScreen}
    ></Question>
  </View>
);

const styles = StyleSheet.create({
  window: {
    width: "100%",
    paddingTop: 32,
    paddingBottom: 132,
    paddingHorizontal: 16,

    backgroundColor: "#FFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
});
