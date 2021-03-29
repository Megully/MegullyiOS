import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
const wid = Dimensions.get('screen').width;

export default function ProgressBar() {
  return (
    <View style={styles.container}>
      <Progress.Bar progress={0.5} width={200} color='#E76F51' unfilledColor='#C9C9C9' borderColor='#fff'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:-8,
  },
  text: {
    fontSize:13,
    fontWeight:"600",
    color:'#707070',
  },
});