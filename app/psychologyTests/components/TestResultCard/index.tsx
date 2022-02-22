import { View, Text } from "react-native";
import React from "react";
import { observer } from "mobx-react-lite";
import { styles } from "./styles";
import { ITestResultProps } from "../../types";
import { Subheading } from "../../../library";
function TestResultCardComponent(props: ITestResultProps) {
  const { faName, enName, variable, rawScore, baseRate, sideColor, interpret } =
    props;
  return (
    <View style={styles.container}>
      <View
        style={[
          sideColor
            ? { ...styles.sideBarColorr, backgroundColor: sideColor }
            : styles.sideBarColorr,
        ]}
      />
      <View style={styles.TextContainer}>
        <Subheading>{faName}</Subheading>
        <Subheading style={{ textAlign: "right" }}>{enName}</Subheading>
        <View style={styles.row}>
          <Subheading style={{ textAlign: "right" }}>
            {`  ${rawScore} = ${variable}`}
          </Subheading>
          <Subheading>{`نرخ تبدیل = ${baseRate}`}</Subheading>
        </View>
        <Subheading>{interpret}</Subheading>
      </View>
    </View>
  );
}
export const TestResultCard = observer(TestResultCardComponent);
