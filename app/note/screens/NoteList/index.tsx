import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { Button, Title, TaskynIcon } from "../../../library";
import { NoteCard } from "../../components/NoteCard";
import { styles } from "./styles";

function NoteListScreen() {
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
          <NoteCard
            id={"1"}
            onPress={(id) => {}}
            date={"۱۳۷۶/۰۶/۰۶"}
            description={
              "بیمار از وسواس فکری شدید رنج میبسش تنشس یتسشی مشس ینمشسدیمشس دیم دش رد..ی بتنی دبشبمشسبمش.."
            }
            title={"وسواس فکری"}
          />
          <NoteCard
            id={"1"}
            onPress={(id) => {}}
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
          Icon={({ size, color }) => {
            return <TaskynIcon name={"camera"} size={size} color={color} />;
          }}
          fullRadius
        >
          {"ایجاد یادداشت جدید"}
        </Button>
      </View>
    </View>
  );
}

export const NoteList = observer(NoteListScreen);
