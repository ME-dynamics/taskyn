import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Touchable, Paragraph, Subheading, Caption } from "../../../library";
import { ITestResultHistoryCardProps } from "../../types";
import { styles } from "./styles";
function TestResultHistoryCardComponent(props: ITestResultHistoryCardProps) {
  const { Icon, title, description, onPress, date, id } = props;
  function onCardPress() {
    if (onPress) {
      onPress(id);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon />
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.testDetailsContainer}>
          <View style={styles.titleContainer}>
            <Subheading
              style={styles.textAlignRight}
            >{`تست ${title}`}</Subheading>
          </View>
          <View style={styles.descriptionContainer}>
            <Paragraph style={styles.description}>{description}</Paragraph>
          </View>
        </View>
        <View style={styles.dateContainer}>
          <Caption numberOfLines={1}>{date}</Caption>
        </View>
      </View>
      <Touchable onPress={onCardPress} rippleColor={"grey"} />
    </View>
  );
}

export const TestResultHistoryCard = observer(TestResultHistoryCardComponent);
