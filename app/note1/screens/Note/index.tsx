import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Subheading, Title, WebIcon } from "../../../library";
import { Card } from "../../components/Card";
import { styles } from "./styles";

export function Note() {
  const [empty, setEmpty] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      {empty ? (
        <View style={styles.empty}>
          <Title>{"شما هنوز یادداشتی ایجاد نکردید."}</Title>
        </View>
      ) : (
        <ScrollView
          style={styles.noteContainer}
          contentContainerStyle={{ alignItems: "center" }}
        >
          <Card
            Icon={WebIcon}
            date={"۱۳۷۶/۰۶/۰۶"}
            description={
              "بیمار از وسواس فکری شدید رنج میبسش تنشس یتسشی مشس ینمشسدیمشس دیم دش رد..ی بتنی دبشبمشسبمش.."
            }
            title={"وسواس فکری"}
          />
          <Card
            Icon={WebIcon}
            date={"۱۳۷۶/۰۶/۰۶"}
            description={
              "بیمار از وسواس فکری شدید رنج میبسش تنشس یتسشی مشس ینمشسدیمشس دیم دش رد..ی بتنی دبشبمشسبمش.."
            }
            title={"وسواس فکری"}
          />
        </ScrollView>
      )}
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"FAB"}
          Icon={WebIcon}
          fullRadius
        >
          {"ایجاد یادداشت جدید"}
        </Button>
      </View>
    </View>
  );
}
