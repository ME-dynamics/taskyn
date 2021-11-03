export interface ITaskItemProps {
  id: string;
  content: string;
  done: boolean;
  createdAt: string;
  onTaskInputFocus: () => void;
  onTaskInputBlur: () => void;
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
