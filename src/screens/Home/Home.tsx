import React from "react";
import { StatusBar } from 'expo-status-bar';
import {Text, StyleSheet, View} from "react-native";

import styles from "./Style";

import { BatLogo } from "../../components/BatLogo/BatLogo";


export default function Home() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.logoContainer}>
        <BatLogo/>
      </View>

        <Text>Welcome to BatPass!</Text>
        <StatusBar style="auto" />
    </View>
  );
}
