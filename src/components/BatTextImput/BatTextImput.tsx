import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextImputStyles';

interface BatTextImputProps {
  pass:string
}

export function BatTextImput(props: BatTextImputProps) {
  return (
        <TextInput
            style={styles.inputer}
            placeholder="BatPass"
            value={props.pass}
        />
  );
}