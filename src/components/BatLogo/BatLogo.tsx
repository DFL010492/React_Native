import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}>
             BAT PASS GENARATOR
        </Text>
        <Image
            source={require('../../../assets/bat-logo.png')}
            style={styles.image}
        />
    </>
  );
}