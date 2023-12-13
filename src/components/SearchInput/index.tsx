import {
  ActivityIndicator,
  Pressable,
  StyleProp,
  Text,
  TextInput,
  View,
  ViewStyle,
} from "react-native";
import React, { Dispatch, useEffect, useState } from "react";
import { styles } from "./styles";
import { Colors } from "common";
import AntDesign from "react-native-vector-icons/AntDesign";

interface ISearchInputProps {
  inputStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
  isDisapled?: boolean;
  value: string;
  setValue: Dispatch<string>;
  placeholder?: string;
}

const SearchInput: React.FC<ISearchInputProps> = ({
  inputStyle,
  isDisapled,
  textInputStyle,
  value,
  setValue,
  placeholder = "Search",
}) => {
  return (
    <View style={[styles.button, inputStyle]}>
      <AntDesign name={"search1"} size={22} />
      {value.length > 0 && (
        <Pressable onPress={() => setValue("")} style={styles.removeBtn}>
          <AntDesign name={"close"} size={22} />
        </Pressable>
      )}

      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={(val) => setValue(val)}
        style={[styles.textInput, textInputStyle]}
      />
    </View>
  );
};

export default React.memo(SearchInput);
