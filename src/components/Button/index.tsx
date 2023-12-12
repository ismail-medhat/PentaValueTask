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

interface IButtonProps {
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  isDisapled?: boolean;
  loading?: boolean;
  title: string;
  onPress?: (event: Event) => void;
}

const Button: React.FC<IButtonProps> = ({
  buttonStyle,
  buttonTextStyle,
  isDisapled,
  loading,
  title,
  onPress = () => {},
}) => {
  return (
    <TouchableOpacity
      disabled={isDisapled || loading}
      onPress={onPress}
      style={[styles.button, buttonStyle]}
      activeOpacity={0.9}
    >
      {loading ? (
        <ActivityIndicator color={Colors.white} size={"small"} />
      ) : (
        <Text style={[styles.buttonText, buttonTextStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default React.memo(Button);
