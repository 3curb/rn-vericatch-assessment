import React, { useContext } from "react";
import { SafeAreaView, StatusBar, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "./src/screens/LoginScreen";
import AccountScreen from "./src/screens/AccountScreen";
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from "./src/context/AuthContext";

const App = () => {
  const { state } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <View style={{ paddingTop: StatusBar.currentHeight }}>
        {state.token === null ? <LoginScreen /> : <AccountScreen />}
      </View>
    </NavigationContainer>
  );
};

export default () => (
  <SafeAreaView>
    <AuthProvider>
      <App />
    </AuthProvider>
  </SafeAreaView>
);
