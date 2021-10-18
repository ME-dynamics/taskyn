export interface IPickerButtonProps {
  mode: "camera" | "gallery";
  onPress: () => void;
  small?: boolean;
}

export interface ILineProps {
  direction?: "vertical" | "horizontal";
}

export interface INoteImageProps {
  uri: string;
  path: string;
  onCropPress: (path: string) => void;
  onRemovePress: (path: string) => void;
}
