// MainStackNavigator.tsx

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ScreenNames from "./ScreenNames";
import { LoginScreen, OTPScreen, SplashScreen } from "screens";

const Stack = createStackNavigator();

const MainStackNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.Splash}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name={ScreenNames.Splash} component={SplashScreen} />
      <Stack.Screen name={ScreenNames.Login} component={LoginScreen} />
      <Stack.Screen name={ScreenNames.OTP} component={OTPScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
