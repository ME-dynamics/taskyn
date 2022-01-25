export interface INoteImageProps {
  id: string;
  onRemovePress: (id: string) => void;
  onImagePress: (id: string) => void;
}

export interface ICreateNoteImageProps {
  imageId: string;
  path: string;
  onCropPress: (path: string) => void;
  onRemovePress: (path: string) => void;
}

export interface INoteHeaderProps {
  onUpdateNotePress: () => Promise<void>;
  onDeletePress: () => void;
}

export interface INoteProps {
  id: string;
  title: string;
  description: string;
  createdAt: string;
}
