import { Entypo } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, Subheading, Title, WebIcon } from "../../../library";
import { NoteCard } from "../../components/NoteCard";
import { styles } from "./styles";

export function NoteList() {
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
            date={"۱۳۷۶/۰۶/۰۶"}
            description={
              "بیمار از وسواس فکری شدید رنج میبسش تنشس یتسشی مشس ینمشسدیمشس دیم دش رد..ی بتنی دبشبمشسبمش.."
            }
            title={"وسواس فکری"}
            onPress={(id) => {
              console.log(id)
            }}
          />
          <NoteCard
          id={"2"}
            date={"۱۳۷۶/۰۶/۰۶"}
            description={
              "بیمار از وسواس فکری شدید رنج میبسش تنشس یتسشی مشس ینمشسدیمشس دیم دش رد..ی بتنی دبشبمشسبمش.."
            }
            title={"وسواس فکری"}
            onPress={(id) => {
              console.log(id)
            }}
          />
        </ScrollView>
      )}
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          rippleColor={"lightGrey"}
          size={"FAB"}
          Icon={() => {
            return <Entypo name="plus" size={24} color="white" />;
          }}
          fullRadius
        >
          {"ایجاد یادداشت جدید"}
        </Button>
      </View>
    </View>
  );
}
