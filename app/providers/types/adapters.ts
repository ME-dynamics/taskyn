import { IRequest, IProvider } from "./entities";

export interface IFetchRequestResult {
  error: string;
  request: IRequest | undefined;
}

export interface IFetchProvidersResult {
  error: string;
  providers: IProvider[];
}

export interface IFetchCreateRequestResult {
  error: string;
  request: IRequest | undefined;
}

export interface IFetchProviderResult {
  error: string;
  provider: IProvider | undefined;
}
