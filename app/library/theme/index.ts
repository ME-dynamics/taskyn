import { widthPercentageToDP } from "react-native-responsive-screen";

const COLORS = {
  PRIMARY: {
    LIGHT: "#8783fd",
    NORMAL: "#5256c9",
    DARK: "#082d97",
  },
  TRANSPARENT: {
    PRIMARY: "rgba(82, 86, 201, 0.2)",
    GREY: "rgba(112,112,112,0.2)",
    WHITE: "rgba(255,255,255, 0.7)",
  },
  GREY: {
    LIGHT: "##cfcfcf",
    NORMAL: "#9e9e9e",
    DARK: "##707070",
  },
  ERROR: "#b71c1c",
};

const FONTS = {
  LIGHT: "Vazir-Light-UI",
  THIN: "Vazir-Thin-UI",
  REGULAR: "Vazir-Regular-UI",
  MEDIUM: "Vazir-Medium-UI",
  BOLD: "Vazir-Bold-UI",
  BLACK: "Vazir-Black-UI",
};

const WIDTH = {
  BIG: widthPercentageToDP("90"),
};

export const THEME = {
  COLORS,
  FONTS,
  WIDTH,
};
