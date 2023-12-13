import React from "react";
import { Text } from "react-native";
import styles from "./styles";
import ScreenNames from "navigation/ScreenNames";
import { ScreenContainer } from "components";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useContactPermission from "hooks/useContactPermission";

type ISplashScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SplashScreen: React.FC<ISplashScreenProps> = ({ navigation }) => {
  const { askContactPermissions } = useContactPermission();
  const { t } = useTranslation();
  React.useEffect(() => {
    askContactPermissions();
    setTimeout(() => {
      navigation.navigate(ScreenNames.Login);
    }, 1000);
  }, []);

  return (
    <ScreenContainer style={styles.container} isDarkStatusBar={false}>
      <Text style={styles.seoudiTxt}>{t("appName")}</Text>
    </ScreenContainer>
  );
};

export default SplashScreen;
