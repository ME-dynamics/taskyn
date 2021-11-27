import { IUser } from "./entities";

export interface IFetchProviders {
  error: string;
  providers: IUser[];
}
