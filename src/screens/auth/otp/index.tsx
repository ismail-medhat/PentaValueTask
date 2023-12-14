import React, { useState } from "react";
import { View, Text, Image, Pressable } from "react-native";
import styles from "./styles";
import { Button, ScreenContainer } from "components";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Colors, Fonts, Images, ScaleHeight, ScaleWidth } from "common";
import OTPInput from "components/OTPInput";
import ScreenNames from "navigation/ScreenNames";
import { StackNavigationProp } from "@react-navigation/stack";
import { ParamListBase } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import useToast from "hooks/useToast";

type IOTPScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
  route: any;
};

const OTPScreen: React.FC<IOTPScreenProps> = ({ navigation, route }) => {
  const phoneNumber = route.params?.phoneNumber ?? "";
  const confirm = route.params?.confirm ?? "";
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { showErrorToast, showSuccessToast } = useToast();

  const confirmCode = async () => {
    setLoading(true);
    try {
      await confirm.confirm(code);
      navigation.navigate(ScreenNames.BottomTabs);
      showSuccessToast("Verification code successfully");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      showErrorToast("Please enter a valid OTP number");
    }
  };

  return (
    <ScreenContainer style={styles.container}>
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        extraHeight={ScaleHeight(200)}
        enableOnAndroid={true}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable onPress={() => navigation.goBack()} style={styles.backArrow}>
          <AntDesign name={"arrowleft"} size={25} color={Colors.black} />
        </Pressable>
        <Image
          source={Images.contactImg}
          style={styles.imgStyle}
          resizeMode={"contain"}
        />
        <Text numberOfLines={2} style={styles.otpTitle}>
          <Text>{"OTP number sent successfully to phone number : "}</Text>
          <Text style={styles.phoneTxt}>{phoneNumber}</Text>
        </Text>
        <OTPInput code={code} onCodeChanged={setCode} />
        <Button
          buttonStyle={{
            marginTop: ScaleHeight("5%"),
          }}
          title={"Confirm OTP Number"}
          onPress={confirmCode}
          loading={loading}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default OTPScreen;
