import { StyleSheet, Platform } from "react-native";
import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";

export const styles = StyleSheet.create({
  button: {
    width: ScaleWidth("90%"),
    height: ScaleHeight(45),
    borderRadius: ScaleHeight(30),
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: ScaleWidth(10),
    backgroundColor: Colors.white,
    alignSelf: "center",
    marginVertical: ScaleHeight(10),
    flexDirection: "row",
    borderWidth: ScaleWidth(0.5),
    borderColor: Colors.lightGray2,
  },
  textInput: {
    marginHorizontal: ScaleWidth(6),
    flex: 1,
  },
  buttonText: {
    fontSize: ScaleWidth(16),
    fontWeight: "700",
    color: Colors.white,
    fontFamily: Fonts.medium,
  },
});
