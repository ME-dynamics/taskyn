export interface ITwoChoiceProps {
  title: string;
  firstChoice: string;
  secondChoice: string;
  choiceState: string | undefined;
  onFirstChoicePress: () => void;
  onSecondChoicePress: () => void;
}

export interface IDropPickerProps {
  title: string;
  item?: Array<string>;
  onValueChange: (value: string) => void;
}

export interface IScrollPickerItem {
  key: string;
  label: string;
}

export interface IScrollPickerProps {
  title: string;
  itemKey: string | undefined;
  items: IScrollPickerItem[];
  onItemSelected: (item: IScrollPickerItem) => void;
}
