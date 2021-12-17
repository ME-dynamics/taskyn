import React, { useState } from "react";
import { View, Text } from "react-native";
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuProvider,
  MenuTrigger,
} from "react-native-popup-menu";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { Button, Input, TaskynIcon, WebIcon } from "../../../library";
import { styles } from "./styles";

export function CreateNote() {
  const [state, setState] = useState(false);
  function onTriggerPress() {
    setState(true);
  }
  function onOptionSelect(value: any) {
    alert(`Selected number: ${value}`);
    setState(false);
  }
  function onBackdropPress() {
    setState(false);
  }
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Input mode={"flat"} title={"موضوع"} />
      </View>
      <View style={styles.body}>
        <Input
          style={{ paddingLeft: 30 }}
          mode={"flat"}
          title={"متن یادداشت"}
          multiline
          numberOfLines={4}
        />
      </View>
      <View style={styles.icon}>
        <TaskynIcon name={"paperclip"} size={24} color={"black"} />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode={"contained"}
          size={"wide"}
          rippleColor={"lightGrey"}
          onPress={onTriggerPress}
        >
          {"ثبت کردن یادداشت"}
        </Button>
      </View>
      <View style={styles.popUp}>
        <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
          <Menu
            opened={state}
            onBackdropPress={() => onBackdropPress()}
            onSelect={(value) => onOptionSelect(value)}
          >
            <MenuTrigger onPress={() => onTriggerPress()} />
            <MenuOptions
              optionsContainerStyle={{
                borderRadius: 12,
                height: 80,
                width: widthPercentageToDP(34),
              }}
            >
              <MenuOption value={1}></MenuOption>
              <Button
                mode={"text"}
                rippleColor={"lightGrey"}
                size={"extra-small"}
                Icon={({ size, color }) => {
                  return (
                    <TaskynIcon name={"camera"} size={size} color={color} />
                  );
                }}
              >
                {"عکس از دوربین"}
              </Button>
              <MenuOption value={2}>
                <Button
                  mode={"text"}
                  rippleColor={"lightGrey"}
                  size={"extra-small"}
                  Icon={WebIcon}
                >
                  {"عکس از گالری"}
                </Button>
              </MenuOption>
            </MenuOptions>
          </Menu>
        </MenuProvider>
      </View>
    </View>
  );
}
