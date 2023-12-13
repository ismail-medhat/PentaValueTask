import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./styles";
import { Colors } from "common";
import OTPInputView from "@twotalltotems/react-native-otp-input";

interface IOTPInputProps {
  inputCodeStyle?: StyleProp<ViewStyle>;
  inputCodeFieldStyle?: StyleProp<TextStyle>;
  code: string;
  onCodeChanged?: (code: string) => void;
  onCodeFilled?: (code: string) => void;
}

const OTPInput: React.FC<IOTPInputProps> = ({
  onCodeChanged,
  code,
  onCodeFilled,
  inputCodeStyle,
  inputCodeFieldStyle,
}) => {
  return (
    <OTPInputView
      style={styles.inputView}
      pinCount={4}
      code={code}
      keyboardType="number-pad"
      onCodeChanged={onCodeChanged}
      autoFocusOnLoad
      codeInputFieldStyle={styles.codeInputFieldStyle}
      onCodeFilled={onCodeFilled}
    />
  );
};

export default React.memo(OTPInput);
