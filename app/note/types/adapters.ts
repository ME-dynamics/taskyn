import { INote } from "./entities";

export interface IUploadImagePayload {
  error: string;
  payload: {
    id: string;
  };
}

export interface IFetchCreateNote {
  customerId: string;
  title: string;
  content: string;
  imageIds: string[];
}

export interface IFetchCreateNotePayload {
  error: string;
  note: INote;
}
