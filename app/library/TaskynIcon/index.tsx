import React from "react";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { ITaskynIconProps } from "./types";
import { observer } from "mobx-react-lite";
const Icon = createIconSetFromIcoMoon(
  require("./selection.json"),
  "TaskynIcon",
  "iconmoon.ttf"
);
function TaskynIconComponent(props: ITaskynIconProps) {
  const { name, size, color } = props;
  return <Icon name={name} size={size} color={color} />;
}

export const TaskynIcon = observer(TaskynIconComponent);
