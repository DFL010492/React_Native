import React from 'react';
import { View, Button, Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';

export function BatButton() {
  return (
    <View>
        <Pressable
            onPress={() => {console.log('Clicou em Mim2')}}
            style={styles.button}
        >
            <Text style={styles.text}>GENARATE</Text>
        </Pressable>

        <Pressable
            onPress={() => {console.log('Clicou em Mim2')}}
            style={styles.button}
        >
            <Text style={styles.text}>EMOTE</Text>
        </Pressable>

    </View>
  );
}