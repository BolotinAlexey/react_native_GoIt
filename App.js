import { StyleSheet, View, Platform } from "react-native";
import { useFonts } from "expo-font";

import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { useState } from "react";

export default App = () => {
  const [fontsLoaded] = useFonts({
    // "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const [isLogin, setIsLogin] = useState(false);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
      {isLogin ? (
        <LoginScreen
          chooseScreen={() => {
            setIsLogin(false);
          }}
        ></LoginScreen>
      ) : (
        <RegistrationScreen
          chooseScreen={() => {
            setIsLogin(true);
          }}
        ></RegistrationScreen>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: "#000000",
      },
      android: {
        backgroundColor: "#ffffff",
      },
    }),
  },
});
