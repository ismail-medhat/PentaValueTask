import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: Colors.white,
  },
  imgStyle: {
    width: ScaleWidth("80%"),
    height: ScaleHeight("45%"),
    alignSelf: "center",
  },
  backArrow: { position: "absolute", left: 10, top: 10 },
  otpTitle: {
    fontSize: 16,
    margin: ScaleWidth("5%"),
    lineHeight: ScaleHeight("3%"),
    color: Colors.gray,
    fontFamily: Fonts.medium,
  },
  phoneTxt: { color: Colors.black, fontFamily: Fonts.medium },
});

export default styles;
