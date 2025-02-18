import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextImputStyles';

export function BatTextImput() {
  return (
        <TextInput
            style={styles.inputer}
            placeholder="BatPass"
        />
  );
}