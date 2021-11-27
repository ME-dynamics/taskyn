import { IProvider } from "./entities";

export interface IFetchProviderInfoResult extends IProvider {
  error: string;
}
