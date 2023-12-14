import {
  ActivityIndicator,
  StyleProp,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
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
  const otpInputRef = useRef(null);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      otpInputRef.current.focusField(0);
    }, 100);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <OTPInputView
      style={styles.inputView}
      pinCount={6}
      code={code}
      keyboardType="number-pad"
      onCodeChanged={onCodeChanged}
      autoFocusOnLoad
      ref={otpInputRef}
      codeInputFieldStyle={styles.codeInputFieldStyle}
      onCodeFilled={onCodeFilled}
    />
  );
};

export default React.memo(OTPInput);
