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
