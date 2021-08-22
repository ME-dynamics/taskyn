import React from 'react';
import { ActivityIndicator } from 'react-native';
import { observer } from 'mobx-react-lite';

import { activityStyleGen } from "./styles"

// types
import { IActivityProps } from "./types"

export const Loading = observer((props: IActivityProps) => {
  const { mode } = props;
  const { activityColor, styles } = activityStyleGen(mode);
  return (
    <ActivityIndicator
      style={styles.container}
      size={'small'}
      color={activityColor}
    />
  );
})

