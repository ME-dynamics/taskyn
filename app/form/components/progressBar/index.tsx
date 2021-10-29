import React from "react";
import { View, Text } from "react-native";
import { Caption, Paragraph, THEME, Title } from "../../../library";
import { IProgressProps } from "../../types";
import { styles } from "./styles";
export function ProgressBar(props: IProgressProps) {
  const { description, leftName, leftPercent, rightName, title } = props;
  // function rightPercent(arg: number){
  //   const value = (100-leftPercent)/100;
  //   return value;
  // }
  const rightPercent = 100 - leftPercent;
  const leftStyle = {
    flex: leftPercent,
  };
  const rightStyle = {
    flex: rightPercent,
  };
  return (
    <View style={styles.container}>
      <View style={styles.progressTitle}>
        <Title>{title}</Title>
      </View>
      <View style={styles.progressDescription}>
        <Paragraph style={{ textAlign: "center" }}>{description}</Paragraph>
      </View>
      <View style={styles.progressBar}>
        <View style={[styles.progressLeft, leftStyle]}>
          <Caption style={{ color: "white" }}>{`${leftPercent}%`}</Caption>
        </View>
        <View style={[styles.progressRight, rightStyle]}>
          <Caption style={{ color: "black" }}>{`${rightPercent}%`}</Caption>
        </View>
      </View>
      <View style={styles.typeTitle}>
        <Paragraph style={{ color: THEME.COLORS.PRIMARY.NORMAL }}>
          {leftName}
        </Paragraph>
        <Paragraph style={{ color: THEME.COLORS.GREY.DARK }}>
          {rightName}
        </Paragraph>
      </View>
      <View style={styles.fullLine} />
    </View>
  );
}
