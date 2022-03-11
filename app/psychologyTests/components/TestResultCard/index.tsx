import { View } from "react-native";
import React from "react";
import { observer } from "mobx-react-lite";
import {
  styles,
  errorColor,
  facetColor,
  factorColor,
  warningColor,
} from "./styles";
import { ITestResultProps } from "../../types";
import { Headline, Subheading, THEME, Title } from "../../../library";
function TestResultCardComponent(props: ITestResultProps) {
  const { faName, enName, variable, rawScore, baseRate, type, interpret } =
    props;

  function typeToColor(value: string) {
    switch (value) {
      case "factor":
        return factorColor;
      case "error":
        return errorColor;
      case "warning":
        return warningColor;
      case "facet":
        return facetColor;
      default:
        return "#ffffff";
    }
  }
  function typeToTitle(value: string) {
    switch (value) {
      case "factor":
        return "عامل";
      case "error":
        return "خطا";
      case "warning":
        return "هشدار";
      case "facet":
        return "زیر عامل";
      default:
        return "";
    }
  }
  function baseRateCal() {
    if (rawScore === baseRate) {
      return null;
    }
    return (
      <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
        {`نرخ تبدیل پایه = `}
        <Subheading>{baseRate}</Subheading>
      </Subheading>
    );
  }
  function interpretRenderer() {
    if (interpret) {
      return (
        <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
          {`وضعیت: `}
          <Subheading>{interpret}</Subheading>
        </Subheading>
      );
    }
    return null;
  }

  return (
    <View style={styles.container}>
      <View
        style={[
          type
            ? { ...styles.sideBarColor, backgroundColor: typeToColor(type) }
            : styles.sideBarColor,
        ]}
      />
      <View style={styles.textContainer}>
        <Headline>{typeToTitle(type)}</Headline>
        <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
          {`نام فارسی:`} <Subheading>{faName}</Subheading>
        </Subheading>

        <Subheading
          style={{ textAlign: "right", color: THEME.COLORS.GREY.DARK }}
        >
          {`نام انگلیسی: `}
          <Subheading>{enName}</Subheading>
        </Subheading>
        <Subheading
          style={{ textAlign: "right", color: THEME.COLORS.GREY.DARK }}
        >
          {`نماد: `}
          <Subheading>{variable.toUpperCase()}</Subheading>
        </Subheading>
        <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
          {`نمره خام: `}
          <Subheading>{rawScore}</Subheading>
        </Subheading>
        {baseRateCal()}
        {interpretRenderer()}
      </View>
    </View>
  );
}
export const TestResultCard = observer(TestResultCardComponent);
