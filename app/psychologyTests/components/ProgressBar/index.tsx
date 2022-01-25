import React from "react";
import { View } from "react-native";
import { Paragraph, THEME, Title } from "../../../library";
import { IProgressProps } from "../../types";
import { styles } from "./styles";
export function ProgressBar(props: IProgressProps) {
  const { leftName, leftPercent, rightName } = props;
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
      {/* <View style={styles.progressTitle}>
        <Title>{title}</Title>
      </View> */}
      {/* <View style={styles.progressDescription}>
        <Paragraph style={{ color: "#727272" }}>{description}</Paragraph>
      </View> */}
      <View style={styles.progressBar}>
        <View style={[styles.progressLeft, leftStyle]}>
          <View style={styles.titleWithPercent}>
            <Paragraph style={{ color: "white" }}>{leftName}</Paragraph>
            <Paragraph
              style={{ color: "white", left: 6 }}
            >{`${leftPercent}%`}</Paragraph>
          </View>
        </View>
        <View style={[styles.progressRight, rightStyle]}>
          <View style={styles.titleWithPercent}>
            <Paragraph style={{ color: THEME.COLORS.PRIMARY.NORMAL, right: 6 }}>
              {rightName}
            </Paragraph>
            <Paragraph
              style={{ color: THEME.COLORS.PRIMARY.NORMAL }}
            >{`${rightPercent}%`}</Paragraph>
          </View>
        </View>
      </View>
      <View style={styles.typeTitle}></View>
      <View style={styles.fullLine} />
    </View>
  );
}
