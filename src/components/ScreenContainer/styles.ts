import { StyleSheet, Platform } from "react-native";
import { Colors, ScaleHeight } from "common";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGray,
    paddingTop: Platform.OS === "android" ? ScaleHeight(40) : 0,
  },
});
