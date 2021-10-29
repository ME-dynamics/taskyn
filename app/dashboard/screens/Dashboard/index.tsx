import React from "react";
import { View, ScrollView } from "react-native";
import { observer } from "mobx-react-lite";
import { AntDesign, Foundation, MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { OnlineIcon, WebIcon } from "../../../library/Icon";
import { Card, Tile } from "../../components";
import { styles } from "./styles";


function DashboardScreen() {
  const state = false;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.card}>
          <Card
            id={""}
            name={state ? "نامشخص" : "سیف اله"}
            description={state ? "نامشخص" : "سیف اله"}
            imageUrl={"https://cdn01.zoomit.ir/2021/10/m1-max-m1-pro.jpg"}
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
            <Tile
              title={"تمرینات"}
              Icon={({ size, color }) => {
                return <OnlineIcon size={size}/>;
              }}
              onPress={() => {
                console.log("tile pressed");
              }}
            />
            <Tile
              title={"نوت برداری"}
              Icon={({ size, color }) => {
                return <OnlineIcon size={size}  />;
              }}
              onPress={() => {
                console.log("tile pressed");
              }}
            />
          </View>
          <View style={styles.row}>
            <Tile
              title={"فرم ها"}
              Icon={({ size, color }) => {
                return <Foundation name="clipboard-notes" size={size} color={color} />;
              }}
              onPress={() => {
                console.log("tile pressed");
              }}
            />
            <Tile
              title={"پرونده بیمار"}
              Icon={({ size, color }) => {
                return <MaterialCommunityIcons name="file-document-edit-outline" size={size} color={color} />;
              }}
              onPress={() => {
                console.log("tile pressed");
              }}
            />
          </View>
          {/* <Tile
           name={"task"}
           onPress={() => navigation.navigate("Details")}
           />
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
            </View> */}
        </ScrollView>
      </View>
    </View>
  );
}


export const Dashboard = observer(DashboardScreen);