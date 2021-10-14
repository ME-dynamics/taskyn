import {
  AntDesign,
  FontAwesome5,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
} from "@expo/vector-icons";
const SIZE = 40;

const state = true;
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Card } from "../components";
import { styles } from "./style";
import { Paragraph, Subheading, THEME, Title, Touchable } from "../../library";
export function Dashboard() {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.card}>
          <Card
            id={""}
            name={state ? "نامشخص" : "سیف اله"}
            description={state ? "نامشخص" : "سیف اله"}
            image={require("../../../assets/image/images.png")}
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <ScrollView
          style={styles.scrollViewContainer}
          contentContainerStyle={styles.containerContentStyle}
        >
          <View style={styles.row}>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Octicons
                  name="tasklist"
                  size={SIZE}
                  color={THEME.COLORS.PRIMARY.NORMAL}
                />
                <View style={styles.iconTitleContainer}>
                  <Subheading>{"تمرینات"}</Subheading>
                </View>
              </View>

              <Touchable rippleColor={"lightGrey"} />
            </View>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <AntDesign
                  name="form"
                  size={SIZE}
                  color={THEME.COLORS.PRIMARY.NORMAL}
                />

                <View style={styles.iconTitleContainer}>
                  <Subheading>{"نوت برداری"}</Subheading>
                </View>
              </View>
              <Touchable rippleColor={"lightGrey"} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Foundation
                  name="clipboard-notes"
                  size={SIZE}
                  color={THEME.COLORS.PRIMARY.NORMAL}
                />
                <View style={styles.iconTitleContainer}>
                  <Subheading>{"فرم ها"}</Subheading>
                </View>
              </View>
              <Touchable rippleColor={"lightGrey"} />
            </View>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Ionicons
                  name="checkmark-done"
                  size={SIZE}
                  color={THEME.COLORS.PRIMARY.NORMAL}
                />
                <View style={styles.iconTitleContainer}>
                  <Subheading>{"فرم های انجام شده"}</Subheading>
                </View>
              </View>
              <Touchable rippleColor={"lightGrey"} />
            </View>
          </View>
          <View style={styles.row}>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <MaterialCommunityIcons
                  name="file-document-edit-outline"
                  size={SIZE}
                  color={THEME.COLORS.PRIMARY.NORMAL}
                />
                <View style={styles.iconTitleContainer}>
                  <Subheading>{"پرونده بیمار"}</Subheading>
                </View>
              </View>
              <Touchable rippleColor={"lightGrey"} />
            </View>
            <View style={styles.button}>
              <View style={styles.iconContainer}>
                <Octicons
                  name="tasklist"
                  size={SIZE}
                  color={THEME.COLORS.PRIMARY.NORMAL}
                />
                <View style={styles.iconTitleContainer}>
                  <Subheading>{"تمرینات"}</Subheading>
                </View>
              </View>
              <Touchable rippleColor={"lightGrey"} />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
