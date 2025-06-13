import { Dimensions, Platform } from "react-native";

const constant = {

  /** screen */
  screen: Dimensions.get("window"),
  screenHeight:
    (Platform.OS === "ios" && Dimensions.get("window").height) ||
    Dimensions.get("window").height - 24,
  screenWidth: Dimensions.get("window").width,
  
  /** iphone and android condition */
  isIOS: Platform.OS === "ios",
  isANDROID: Platform.OS === "android",
  isIPAD: Platform.OS === "ios" && Platform.isPad,

  fontInterLight: "Inter-Light",
  fontInterMedium: "Inter-Medium",
  fontInterRegular: "Inter-Regular",
  fontInterBold: "Inter-Bold",
  fontInterSemiBold: "Inter-SemiBold",

};

export default constant;