import { Ref } from "react";
import { ScrollViewProps, ViewProps } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  KeyboardAwareScrollViewProps,
  KeyboardAwareScrollView,
} from "react-native-keyboard-aware-scroll-view";

export type tScrollerRef = ScrollView & KeyboardAwareScrollView;

export interface IScroller
  extends ScrollViewProps,
    KeyboardAwareScrollViewProps {
  ref: Ref<tScrollerRef>;
  rtl?: boolean;
  keyboard?: boolean;
}

export interface IRTLView extends ViewProps {}
