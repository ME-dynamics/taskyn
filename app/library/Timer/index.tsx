import React, { useEffect } from "react";
import { Observer } from "mobx-react-lite";
import { Paragraph } from "../Typography";
import { TimerState } from "./state";
import { ITimerProps } from "./types";

export const Timer = (props: ITimerProps) => {
  const { minute, second } = props;
  const state = new TimerState({ minute, second });
  useEffect(() => {
    return () => {
      state.clear();
    };
  }, []);
  return (
    <Observer>
      {() => (
        <Paragraph {...props}>{`${state.minute}:${state.formattedSecond}`}</Paragraph>
      )}
    </Observer>
  );
};
