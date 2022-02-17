import { View } from "react-native";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import { toJS } from "mobx";
import { Input, Subheading } from "../../../library";
import { userInfoState } from "../../entities";

import { styles } from "./styles";
import type { IBirthDayInputProps } from "../../types";
function BirthDayInputComponent(props: IBirthDayInputProps) {
  const { onBirthdayChange } = props;
  const [activeBorder, setActiveBorder] = useState({
    day: false,
    month: false,
    year: false,
  });
  const [year, month, day] = toJS(userInfoState.birthday.split("-")); // TODO: write a parser for this
  const [birthDay, setBirthDay] = useState({ day, month, year });
  useEffect(() => {
    const { day, month, year } = birthDay;
    if (day && month && year) {
      // console.log("birthday", `${year}-${month}-${day}`);
      onBirthdayChange(birthDay);
    }
  }, [birthDay]);
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Subheading>{"تاریخ تولد"}</Subheading>
      </View>
      <View
        style={[
          styles.dayInput,
          activeBorder.day ? styles.activeBorder : styles.deActiveBorder,
        ]}
      >
        <Input
          mode={"no-style"}
          style={{ textAlign: "center" }}
          placeholder={"روز"}
          value={birthDay.day}
          onChangeText={(text) => {
            setBirthDay({ ...birthDay, day: text });
          }}
          maxLength={2}
          onFocus={() => {
            setActiveBorder({ ...activeBorder, day: true });
          }}
          onBlur={() => {
            setActiveBorder({ ...activeBorder, day: false });
          }}
        />
      </View>
      <View
        style={[
          styles.monthInput,
          activeBorder.month ? styles.activeBorder : styles.deActiveBorder,
        ]}
      >
        <Input
          mode={"no-style"}
          placeholder={"ماه"}
          style={{ textAlign: "center" }}
          value={birthDay.month}
          onChangeText={(text) => {
            setBirthDay({ ...birthDay, month: text });
          }}
          maxLength={2}
          onFocus={() => {
            setActiveBorder({ ...activeBorder, month: true });
          }}
          onBlur={() => {
            setActiveBorder({ ...activeBorder, month: false });
          }}
        />
      </View>
      <View
        style={[
          styles.yearInput,
          activeBorder.year ? styles.activeBorder : styles.deActiveBorder,
        ]}
      >
        <Input
          mode={"no-style"}
          value={birthDay.year}
          placeholder={"سال"}
          style={{ textAlign: "center" }}
          onChangeText={(text) => {
            setBirthDay({ ...birthDay, year: text });
          }}
          maxLength={4}
          onFocus={() => {
            setActiveBorder({ ...activeBorder, year: true });
          }}
          onBlur={() => {
            setActiveBorder({ ...activeBorder, year: false });
          }}
        />
      </View>
    </View>
  );
}
export const BirthDayInput = observer(BirthDayInputComponent);
