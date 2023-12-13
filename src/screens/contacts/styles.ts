import { Colors, Fonts, ScaleHeight, ScaleWidth } from "common";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  contactItem: {
    width: ScaleWidth("100%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: ScaleWidth(10),
  },
  contactImg: {
    width: ScaleWidth("18%"),
    height: ScaleWidth("18%"),
    borderRadius: ScaleWidth("9%"),
  },
  contactInfoBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: Colors.gray2,
    borderBottomWidth: ScaleWidth(0.5),
  },
  contactActionBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: ScaleWidth("22%"),
  },
  contactName: {
    fontFamily: Fonts.medium,
    fontSize: 16,
    color: Colors.gray,
    textAlign: "left",
  },
  removeBtn: {
    position: "absolute",
    width: ScaleWidth(26),
    height: ScaleWidth(26),
    borderRadius: ScaleWidth(13),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.red,
    right: 5,
    top: 5,
    zIndex: 2,
  },
  favoriteBox: {
    width: ScaleWidth("20%"),
    marginStart: ScaleWidth("3%"),
    paddingVertical: ScaleHeight(5),
  },
});

export default styles;
