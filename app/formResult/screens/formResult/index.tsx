import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Button, THEME } from "../../../library";
import { CategoryComponent } from "../../components/category";
import { ResultTile } from "../../components/resultTile";
import { styles } from "./styles";

export function FormResult() {
  const [mode, setMode] = useState("contained");
  return (
    <View style={styles.container}>
      <View style={styles.categoryContainer}>
        <Button
          mode={mode}
          size={"small"}
          rippleColor={"lightGrey"}
          fullRadius
          onPress={() =>
            setMode(mode === "outlined" ? "contained" : "outlined")
          }
        >
          asd
        </Button>
        <Button mode={mode} size={"small"} rippleColor={"lightGrey"} fullRadius>
          asd
        </Button>
        <Button mode={mode} size={"small"} rippleColor={"lightGrey"} fullRadius>
          asd
        </Button>
        {/* <CategoryComponent
          mode={mode}
          rippleColor={"lightGrey"}
          color={THEME.COLORS.PRIMARY.NORMAL}
          onPress={() =>
            setMode(mode === "outlined" ? "contained" : "outlined")
          }
        >
          {"Neo"}
        </CategoryComponent>
        <CategoryComponent
          mode={mode}
          rippleColor={"lightGrey"}
          color={THEME.COLORS.PRIMARY.NORMAL}
          onPress={() =>
            setMode(mode === "outlined" ? "contained" : "outlined")
          }
        >
          {"Mbti"}
        </CategoryComponent>
        <CategoryComponent
          mode={mode}
          rippleColor={"lightGrey"}
          color={THEME.COLORS.PRIMARY.NORMAL}
          onPress={() =>
            setMode(mode === "outlined" ? "contained" : "outlined")
          }
        >
          {"Mbti"}
        </CategoryComponent> */}
      </View>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.resultTileContainer}>
          <ResultTile
            color={"red"}
            result={"abcds"}
            createdAt={"1376/6/6"}
            title={"mbti"}
          />
        </View>
      </ScrollView>
    </View>
  );
}
