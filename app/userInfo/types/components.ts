export interface ITwoChoiceProps {
  title: string;
  firstChoice: string;
  secondChoice: string;
  choiceState: string;
  onFirstChoicePress: () => void;
  onSecondChoicePress: () => void;
}
