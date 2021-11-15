import { useNavigation } from "@react-navigation/core";
import { StackNavigationProp } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, ScrollView,  } from "react-native";
import { Button, THEME ,Touchable} from "../../../library";
import { CategoryComponent } from "../../components/category";
import { ResultTile } from "../../components/resultTile";
import { styles } from "./styles";

export function FormResult() {
  const navigation = useNavigation<StackNavigationProp<any>>();

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
          {"MBTI"}
        </Button>
        <Button mode={mode} size={"small"} rippleColor={"lightGrey"} fullRadius>
          {"NEO"}
        </Button>
        <Button mode={mode} size={"small"} rippleColor={"lightGrey"} fullRadius>
          {"beck-D"}
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
            result={" INTJ-T "}
            createdAt={"1376/6/6"}
            title={"mbti"}
          />
        </View>
        <Touchable rippleColor={"lightGrey"} onPress={()=>{navigation.push("MbtiResult")}}/>
      </ScrollView>
    </View>
  );
}
