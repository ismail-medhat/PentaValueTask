import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { ScreenContainer } from "components";
import { Images, ScaleWidth } from "common";
const ContactsScreen: React.FC = () => {
  return (
    <ScreenContainer style={styles.container}>
      <Text>Contacts Screen!</Text>
    </ScreenContainer>
  );
};

export default ContactsScreen;
