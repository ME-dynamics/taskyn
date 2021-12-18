

export interface INoteImageProps {
  imageId: string;
  path: string;
  onCropPress: (path: string) => void;
  onRemovePress: (path: string) => void;
}
