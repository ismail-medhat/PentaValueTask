import { StyleProp, Text, ViewStyle } from "react-native";
import React, { Dispatch, useEffect, useRef, useState } from "react";
import { styles } from "./styles";
import { Colors, ScaleHeight } from "common";
import PhoneNumberInput from "react-native-phone-number-input";

interface IPhoneInputProps {
  inputStyle?: StyleProp<ViewStyle>;
  isDisapled?: boolean;
  value: string;
  setValue: Dispatch<string>;
  setFormattedValue?: Dispatch<string>;
}

const PhoneInput: React.FC<IPhoneInputProps> = ({
  inputStyle,
  isDisapled,
  value,
  setValue,
  setFormattedValue = (value: string) => {},
}) => {
  const phoneInput = useRef<PhoneNumberInput>(null);
  return (
    <PhoneNumberInput
      ref={phoneInput}
      containerStyle={[styles.button, inputStyle]}
      defaultValue={value}
      placeholder={"Enter phone number"}
      disabled={isDisapled}
      defaultCode="EG"
      layout="first"
      onChangeText={(text) => {
        setValue(text);
      }}
      onChangeFormattedText={(text) => {
        setFormattedValue(text);
      }}
      withDarkTheme
      withShadow
      textInputStyle={{ fontSize: 15, color: Colors.black }}
      codeTextStyle={{ fontSize: 15, color: Colors.black }}
      textContainerStyle={{
        height: ScaleHeight(45),
        borderTopRightRadius: ScaleHeight(10),
        borderBottomRightRadius: ScaleHeight(10),
        backgroundColor: Colors.lightGray,
      }}
    />
  );
};

export default React.memo(PhoneInput);
