import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import { styles } from './BatButtonStyles';
import { BatTextImput } from '../BatTextImput/BatTextImput';
import genaratePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';



export function BatButton() {

    const [pass, setpass] = useState('')

    function handleGenerateButton () {
        let genarateToken = genaratePass()
        setpass(genarateToken)
    }

    function handleCopyButton() {
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
        <BatTextImput pass = {pass}/>

        <Pressable
            onPress={handleGenerateButton}
            style={styles.button}
        >
            <Text style={styles.text}>GENARATE</Text>
        </Pressable>

        <Pressable
            onPress={handleCopyButton}
            style={styles.button}
        >
            <Text style={styles.text}>COPY</Text>
        </Pressable>

    </>
  );
}