export type tTaskynIconNames =
  | "close"
  | "close-circle"
  | "users"
  | "trash"
  | "timer"
  | "tests"
  | "telegram"
  | "task"
  | "search"
  | "repeat"
  | "profile"
  | "practice"
  | "note"
  | "pencil"
  | "paperclip"
  | "notes"
  | "neo"
  | "menu"
  | "mbti"
  | "logout"
  | "linkedin"
  | "law"
  | "instagram"
  | "info"
  | "image"
  | "home"
  | "folder"
  | "help-circle"
  | "headphones"
  | "forward"
  | "form"
  | "filter"
  | "file-history"
  | "file"
  | "done"
  | "document"
  | "disconnected"
  | "camera"
  | "back"
  | "google";

export interface ITaskynIconProps {
  name: tTaskynIconNames;
  size: number;
  color: string;
  svg?: boolean;
}

export interface ISvgIconProps {
  size?: number;
}
