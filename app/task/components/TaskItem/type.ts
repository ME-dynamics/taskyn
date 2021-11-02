export interface ITaskItemProps {
  text: string;
  date: string;
}

export interface IInputProps {
  value: string;
  onChangeText: (value: string) => void;
  placeholder?: string;
  onClear: () => void;
}
export interface IEditProps {
  text: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IUndoneProps {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setDone: React.Dispatch<React.SetStateAction<boolean>>;
}
