import React from "react";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { observer } from "mobx-react-lite";

import { File } from "./File";
import { FileHistory } from "./FileHistory";
import { Form } from "./Form";
import { Google } from "./Google";
import { Instagram } from "./Instagram";
import { Note } from "./Note";
import { Practice } from "./Practice";

import { ITaskynIconProps } from "./types";
const Icon = createIconSetFromIcoMoon(
  require("./selection.json"),
  "TaskynIcon",
  "iconmoon.ttf"
);
function TaskynIconComponent(props: ITaskynIconProps) {
  const { name, size, color, svg } = props;
  if (name === "google") {
    return <Google size={size} />;
  }
  if (svg) {
    if (name === "file") {
      return <File size={size} />;
    }
    if (name === "file-history") {
      return <FileHistory size={size} />;
    }
    if (name === "form") {
      return <Form size={size} />;
    }

    if (name === "instagram") {
      return <Instagram size={size} />;
    }
    if (name === "note") {
      return <Note size={size} />;
    }
    if (name === "practice") {
      return <Practice />;
    }
    return <Icon name={name} size={size} color={color} />;
  }
  return <Icon name={name === "note" ? "ph_note" : name} size={size} color={color} />;
}

export const TaskynIcon = observer(TaskynIconComponent);
