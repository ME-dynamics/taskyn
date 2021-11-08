export interface INoteImage {
  path: string;
  id: string;
}

export interface INote {
  id: string;
  title: string;
  content: string;
  imageIds: string[];
  createdAt: string;
}
