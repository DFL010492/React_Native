import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Text, StyleSheet, View} from "react-native";
import styles from "./Style";
import { Menu } from "../components/Menu";

export default function Home() {
  return (
    <View style={styles.container}>
        <Menu/>
        <Text>Welcome to BatPass!</Text>
        <StatusBar style="auto" />
    </View>
  );
}
