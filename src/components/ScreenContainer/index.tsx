import {
  View,
  StatusBar,
  SafeAreaView,
  StyleProp,
  ColorValue,
  ViewStyle,
} from "react-native";
import React, { JSX } from "react";
import { styles } from "./styles";

interface IScreenContainerProps {
  children: JSX.Element;
  style?: StyleProp<ViewStyle>;
  isDarkStatusBar?: boolean;
  statusBarBg?: ColorValue;
}

const ScreenContainer: React.FC<IScreenContainerProps> = ({
  children,
  style,
  isDarkStatusBar = true,
  statusBarBg,
}) => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor={statusBarBg ? statusBarBg : "transparent"}
        barStyle={isDarkStatusBar ? "dark-content" : "light-content"}
        animated
        showHideTransition="fade"
      />
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </>
  );
};

export default ScreenContainer;
