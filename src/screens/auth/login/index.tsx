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
import useToast from "hooks/useToast";
import auth from "@react-native-firebase/auth";
import firebase from "@react-native-firebase/app";

type ILoginScreenProps = {
  navigation: StackNavigationProp<ParamListBase>;
};

const LoginScreen: React.FC<ILoginScreenProps> = ({ navigation }) => {
  const [phone, setPhone] = useState<string>("");
  const [phoneWithCode, setPhoneWithCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState<string | null>(null);
  const { askContactPermissions } = useContactPermission();
  const { showErrorToast, showSuccessToast } = useToast();

  const RNfirebaseConfig = {
    apiKey: "AIzaSyDjvMYyeeU75IgNqRM-09Z2CqM5ik3LVw8",
    authDomain: "my-contacts-73bff.firebaseapp.com",
    projectId: "my-contacts-73bff",
    storageBucket: "my-contacts-73bff.appspot.com",
    appId: "1:1069899721549:android:6f748fc29a6e2260dd2504",
    databaseURL: "https://my-contacts-73bff.firebaseio.com",
    messagingSenderId: "1069899721549",
  };
  firebase.initializeApp(RNfirebaseConfig);

  useEffect(() => {
    askContactPermissions();
  }, []);

  const signInWithPhoneNumber = async (phoneNumber: string) => {
    if (phone.length < 7) {
      showErrorToast("Please enter a valid phone number");
    } else {
      setLoading(true);
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
    }
  };

  useEffect(() => {
    if (confirm) {
      navigation.navigate(ScreenNames.OTP, {
        phoneNumber: phoneWithCode,
        confirm: confirm,
      });
      setLoading(false);

      showSuccessToast("OTP number sent successfully");
    }
  }, [confirm]);

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
        <PhoneInput
          value={phone}
          setValue={setPhone}
          setFormattedValue={setPhoneWithCode}
        />
        <Button
          title={"Login With Phone Number"}
          onPress={() => signInWithPhoneNumber(phoneWithCode)}
          loading={loading}
        />
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default LoginScreen;
