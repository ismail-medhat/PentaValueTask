import { Colors, ScaleHeight, ScaleWidth } from "common";
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
    height: ScaleHeight("60%"),
  },
});

export default styles;
