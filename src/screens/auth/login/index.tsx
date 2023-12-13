import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Button, ScreenContainer } from "components";
import { Images, ScaleHeight } from "common";
import PhoneInput from "components/PhoneInput";
import ScreenNames from "navigation/ScreenNames";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import useContactPermission from "hooks/useContactPermission";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type ILoginScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const LoginScreen: React.FC<ILoginScreenProps> = ({ navigation }) => {
  const [phone, setPhone] = useState<string>("");
  const { askContactPermissions } = useContactPermission();
  useEffect(() => {
    askContactPermissions();
  }, []);
  return (
    <ScreenContainer style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        extraHeight={ScaleHeight(200)}
        // enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <Image
          source={Images.contactImg}
          style={styles.imgStyle}
          resizeMode={"contain"}
        />
        <PhoneInput value={phone} setValue={setPhone} />
        <Button
          title={"Login With Phone Number"}
          onPress={() =>
            navigation.navigate(ScreenNames.OTP, { phoneNumber: phone })
          }
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default LoginScreen;
