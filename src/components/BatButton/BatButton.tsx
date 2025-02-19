import React, { useState, useEffect } from 'react';
import { Text, Pressable, FlatList, Alert } from 'react-native';
import { styles } from './BatButtonStyles';
import { BatTextImput } from '../BatTextImput/BatTextImput';
import genaratePass from '../../services/passwordService';
import * as Clipboard from 'expo-clipboard';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function BatButton() {

    const [pass, setPass] = useState('');
    const [savedPasswords, setSavedPasswords] = useState<string[]>([]);

    useEffect(() => {
        loadSavedPasswords();
    }, []);

    async function handleGenerateButton() {
        let generatedToken = genaratePass();
        setPass(generatedToken);
    }

    async function handleCopyButton() {
        if (pass) {
            await Clipboard.setStringAsync(pass);
        }
    }

    async function handleSavePassword() {
        if (pass && !savedPasswords.includes(pass)) {
            const updatedPasswords = [pass, ...savedPasswords].slice(0, 3);
            setSavedPasswords(updatedPasswords);
            await AsyncStorage.setItem('savedPasswords', JSON.stringify(updatedPasswords));
        }
    }

    async function loadSavedPasswords() {
        const storedPasswords = await AsyncStorage.getItem('savedPasswords');
        if (storedPasswords) {
            setSavedPasswords(JSON.parse(storedPasswords).slice(0, 3));
        }
    }

    async function handleCopySavedPassword(savedPass: string) {
        await Clipboard.setStringAsync(savedPass);
    }

    return (
        <>
            <BatTextImput pass={pass} />

            <Pressable onPress={handleGenerateButton} style={styles.button}>
                <Text style={styles.text}>GENARATE</Text>
            </Pressable>

            <Pressable onPress={handleCopyButton} style={styles.button}>
                <Text style={styles.text}>COPY</Text>
            </Pressable>

            <Pressable onPress={handleSavePassword} style={styles.button}>
                <Text style={styles.text}>SAVE</Text>
            </Pressable>

            <Text style={styles.text}>Saved Passwords:</Text>

            <FlatList
                data={savedPasswords}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Pressable onPress={() => handleCopySavedPassword(item)} style={styles.button}>
                        <Text style={styles.text}>{item}</Text>
                    </Pressable>
                )}
            />
        </>
    );
}
