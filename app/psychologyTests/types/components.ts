import { ReactElement } from "react";
export interface ITestHistoryCardProps {
  onPress?: () => void;
}

export interface IProgressProps {
  description: string;
  title: string;
  leftName: string;
  rightName: string;
  leftPercent: number;
}

export interface IFormCardProps {
  id: string;
  Icon: () => ReactElement;
  title: string;
  subtitle: string;
  onPress?: (id: string) => void;
}

export interface ITextIconProps {
  label: string;
  labelColor?: string;
}

export interface IAnswerCardProps {
  id: string;
  onPress?: (id: string) => void;
  selected: boolean;
  text: string;
}

export interface IQuestionNavigatorProps {
  currentQuestion: number;
  totalQuestionSize: number;
  nextQuestion: () => void;
  prevQuestion: () => void;
  onSubmit: () => void;
}
