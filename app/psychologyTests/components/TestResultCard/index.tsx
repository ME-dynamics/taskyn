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
      <View style={{ flex: 1, paddingVertical: 6 }}>
        <Subheading>
          {`نرخ تبدیل پایه: `}
          <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
            {baseRate}
          </Subheading>
        </Subheading>
      </View>
    );
  }
  function interpretRenderer() {
    if (interpret) {
      return (
        <Subheading>
          {`وضعیت: `}
          <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
            {interpret}
          </Subheading>
        </Subheading>
      );
    }
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <View style={{ flex: 1, paddingVertical: 6 }}>
            <Headline>{typeToTitle(type)}</Headline>
          </View>
          <View style={{ flex: 1, paddingVertical: 6 }}>
            <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
              <Subheading>
                {faName}
                <Subheading
                  style={{ color: THEME.COLORS.GREY.DARK }}
                >{` ( ${enName} )`}</Subheading>
              </Subheading>
            </Subheading>
          </View>
          <View style={{ flex: 1, paddingVertical: 6 }}>
            <Subheading style={{ textAlign: "right" }}>
              {`نماد: `}
              <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
                {variable.toUpperCase()}
              </Subheading>
            </Subheading>
          </View>
          {baseRateCal()}
          <View style={{ flex: 1, paddingVertical: 6 }}>
            <Subheading>
              {`نمره خام: `}
              <Subheading style={{ color: THEME.COLORS.GREY.DARK }}>
                {rawScore}
              </Subheading>
            </Subheading>
          </View>

          <View style={{ flex: 1, paddingVertical: 6 }}>
            {interpretRenderer()}
          </View>
        </View>
      </View>
      <View
        style={[
          type
            ? { ...styles.sideBarColor, backgroundColor: typeToColor(type) }
            : styles.sideBarColor,
        ]}
      />
    </View>
  );
}
export const TestResultCard = observer(TestResultCardComponent);
