import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";

export const styles = StyleSheet.create({
  button: {
    width: ScaleWidth("90%"),
    height: ScaleHeight(45),
    borderRadius: ScaleHeight(10),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginVertical: ScaleHeight(15),
  },
  buttonText: {
    fontSize: ScaleWidth(16),
    fontWeight: "700",
    color: Colors.white,
    fontFamily: Fonts.medium,
  },
  textContainerStyle: {
    height: ScaleHeight(45),
    borderTopRightRadius: ScaleHeight(10),
    borderBottomRightRadius: ScaleHeight(10),
    backgroundColor: Colors.lightGray,
  },
  codeTextStyle: {
    fontSize: 15,
    color: Colors.black,
    height: ScaleHeight(45),
    lineHeight: ScaleHeight(45),
  },
  textInputStyle: {
    fontSize: 15,
    color: Colors.black,
    height: ScaleHeight(45),
  },
});
