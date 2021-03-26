import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;

export default function Header() {
  return (
    <View style={styles.container}>
      <Text>header</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    width:wid,
  },
});