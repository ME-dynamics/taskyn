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
import { Subheading } from "../../../library";
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

  return (
    <View style={styles.container}>
      <View
        style={[
          type
            ? { ...styles.sideBarColorr, backgroundColor: typeToColor(type) }
            : styles.sideBarColorr,
        ]}
      />
      <View style={styles.TextContainer}>
        <Subheading>{typeToTitle(type)}</Subheading>
        <Subheading>{`نام فارسی عامل: ${faName}`}</Subheading>
        <Subheading
          style={{ textAlign: "right" }}
        >{`نام انگلیسی عامل: ${enName}`}</Subheading>
        <Subheading style={{ textAlign: "right" }}>
          {`نماد عامل: ${variable.toUpperCase()}`}
        </Subheading>
        <Subheading>{`نمره خام = ${rawScore}`}</Subheading>
        <Subheading>{`نرخ تبدیل پایه = ${baseRate}`}</Subheading>
        <Subheading>{`وضعیت: ${interpret}`}</Subheading>
      </View>
    </View>
  );
}
export const TestResultCard = observer(TestResultCardComponent);
