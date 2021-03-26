import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;
export default function NavBar() {
  return (
    <View style={styles.container}>
      <Text>navbar</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#ff0',
    alignItems: 'center',
    justifyContent: 'center',
    width:wid,
  },
});