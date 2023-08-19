import { StyleSheet, View } from "react-native";
import TitleWindow from "./TitleWindow";
import FormRegistration from "./FormRegistration";

export default RegistrationWindow = () => (
  <View style={styles.window}>
    <TitleWindow>Реєстрація</TitleWindow>
    <FormRegistration></FormRegistration>
  </View>
);

const styles = StyleSheet.create({
  window: {
    width: "100%",
    height: 549,
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,

    backgroundColor: "#FFF",
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
  },
});
