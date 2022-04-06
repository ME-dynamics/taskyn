export interface IStringStorage {
  key: string;
  type: "string";
}

export interface INumberStorage {
  key: string;
  type: "number";
}

export interface IBooleanStorage {
  key: string;
  type: "boolean";
}

export type tStorage = IStringStorage | INumberStorage | IBooleanStorage;

export type tStorageResult<T> = T extends IStringStorage
  ? string | undefined
  : T extends INumberStorage
  ? number | undefined
  : T extends IBooleanStorage
  ? boolean | undefined
  : never;
