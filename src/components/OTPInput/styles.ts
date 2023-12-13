import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";

export const styles = StyleSheet.create({
  inputView: {
    marginTop: ScaleHeight(9),
    width: ScaleWidth("80%"),
    height: ScaleHeight(70),
    alignSelf: "center",
  },
  codeInputFieldStyle: {
    backgroundColor: Colors.lightGray,
    borderRadius: ScaleHeight(4),
    color: Colors.black,
    height: ScaleHeight(45),
    width: ScaleWidth(45),
    fontSize: ScaleWidth(18),
    fontWeight: "bold",
    borderColor: Colors.primary,
    borderWidth: 0.2,
  },
});
