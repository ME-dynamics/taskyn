import React from "react";
import { Image } from "react-native";

import { IIconProps } from "./types";
const Web = require("./web.png");
const File = require("./file.png");
const Files = require("./files.png");
const Form = require("./form.png");
const FormsHistory = require("./formHistory.png");
const Instagram = require("./instagram.png");
const Linkedin = require("./linkedin.png");
const Note = require("./note.png");
const Note2 = require("./note2.png");
const Online = require("./online-registration.png");
const Task = require("./task.png");
const Telegram = require("./telegram.png");

export function WebIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Web}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}
export function FileIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={File}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}

export function FilesIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Files}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}

export function FormIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Form}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}

export function FormHistoryIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={FormsHistory}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}

export function InstagramIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Instagram}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}

export function LinkedinIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Linkedin}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}

export function NoteIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Note}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}

export function Note2Icon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Note2}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}

export function TaskIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Task}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}
export function TelegramIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Telegram}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}
export function OnlineIcon(props: IIconProps) {
  const { size } = props;
  return (
    <Image
      source={Online}
      style={{ width: size, height: size }}
      resizeMode={"contain"}
    />
  );
}
