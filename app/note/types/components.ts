export interface IPickerButtonProps {
  mode: "camera" | "gallery";
  onPress: () => void;
  small?: boolean;
}

export interface ILineProps {
  direction?: "vertical" | "horizontal";
}

export interface INoteImageProps {
  imageId: string;
  path: string;
  onCropPress: (path: string) => void;
  onRemovePress: (path: string) => void;
}
