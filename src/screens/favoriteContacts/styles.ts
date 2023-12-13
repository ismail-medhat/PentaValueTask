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
  emptyBox: { flex: 1, alignItems: "center", justifyContent: "center" },
  emptyContactImg: {
    width: ScaleWidth("80%"),
    height: ScaleWidth("60%"),
    borderRadius: ScaleWidth("5%"),
    marginBottom: ScaleHeight(15),
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
});

export default styles;
