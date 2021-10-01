import React, { useEffect } from "react";
import { Observer } from "mobx-react-lite";
import { Paragraph } from "../Typography";
import { ITimerProps } from "./types";

export function Timer(props: ITimerProps) {
  const { state } = props;
  useEffect(() => {
    return () => {
      state.clear();
    };
  }, []);
  return (
    <Observer>
      {function renderTimer() {
        return (
          <Paragraph
            {...props}
          >{`${state.minute}:${state.formattedSecond}`}</Paragraph>
        );
      }}
    </Observer>
  );
}

export { TimerState } from "./state";
