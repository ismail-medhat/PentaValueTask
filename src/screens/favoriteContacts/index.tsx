import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { ScreenContainer } from "components";
const FavoriteContacts: React.FC = () => {
  return (
    <ScreenContainer style={styles.container}>
      <Text>Favorite Contacts Screen!</Text>
    </ScreenContainer>
  );
};

export default FavoriteContacts;
