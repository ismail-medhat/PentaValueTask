import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";

export const styles = StyleSheet.create({
  button: {
    width: ScaleWidth("90%"),
    height: ScaleHeight(45),
    borderRadius: ScaleHeight(10),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.primary,
    alignSelf: "center",
    marginVertical: ScaleHeight(15),
  },
  buttonText: {
    fontSize: ScaleWidth(16),
    fontWeight: "700",
    color: Colors.white,
    fontFamily: Fonts.medium,
  },
});
