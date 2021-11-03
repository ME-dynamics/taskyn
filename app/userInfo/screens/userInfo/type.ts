export interface IUserInfoProps {
  IInput: {
    title: string[];
    placeholder:string[];
    item:undefined;
  }| undefined;
  IButton: {
    label: string;
  } | undefined;
  IDropPicker: {
    items: string[];
  };
}
