import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Button, ScreenContainer } from "components";
import { Images } from "common";
import PhoneInput from "components/PhoneInput";
import ScreenNames from "navigation/ScreenNames";
const LoginScreen: React.FC = ({ navigation }) => {
  const [phone, setPhone] = useState<string>("");
  return (
    <ScreenContainer style={styles.container}>
      <View>
        <Image
          source={Images.contactImg}
          style={styles.imgStyle}
          resizeMode={"contain"}
        />
        <PhoneInput value={phone} setValue={setPhone} />
        <Button
          title={"Login With Phone Number"}
          onPress={() => navigation.navigate(ScreenNames.BottomTabs)}
        />
      </View>
    </ScreenContainer>
  );
};

export default LoginScreen;
