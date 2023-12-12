import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { ScreenContainer } from "components";
const OTPScreen: React.FC = () => {
  return (
    <ScreenContainer style={styles.container}>
      <Text>OTP Screen Screen!</Text>
    </ScreenContainer>
  );
};

export default OTPScreen;
