import React from "react";
import { View } from "react-native";
import { observer } from "mobx-react-lite";
import { Headline, Paragraph, Button } from "../../../library";

import { styles } from "./styles";

function DeleteSheetComponent() {
  return (
    <View style={styles.container}>
      <Headline>{"حذف یادداشت؟"}</Headline>
      <Paragraph>{"یادداشت برای شما حذف خواهد شد"}</Paragraph>
      <View style={styles.buttonContainer}>
        <Button mode={"contained-grey"} rippleColor={"grey"} size={"medium"}>
          {"انصراف"}
        </Button>
        <Button mode={"contained"} rippleColor={"lightGrey"} size={"medium"}>
          {"حذف"}
        </Button>
      </View>
    </View>
  );
}

export const DeleteSheet = observer(DeleteSheetComponent);
