import { IUser } from "./entities";

export interface IFetchProviders {
  error: string;
  providers: IUser[];
}

export interface IFetchRequest {
  error: string;
  request: {
    providerId: string;
    requestConfirmed: boolean;
  };
}

export interface IFetchUser {
  error: string;
  user: IUser | undefined;
}
