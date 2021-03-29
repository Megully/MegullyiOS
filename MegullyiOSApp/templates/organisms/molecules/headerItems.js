import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import HeaderButton from './atoms/headerButton.js';
import RallyTitle from './atoms/rallyTitle.js';
import ProgressText from './atoms/progressText.js';
import ProgressBar from './atoms/progressBar.js';
const wid = Dimensions.get('screen').width;

export default function HeaderItems() {
  return (
    <View style={styles.container}>
      <HeaderButton icon='bars' />
      <View style={styles.center}>
        <RallyTitle />
        <ProgressText />
        <ProgressBar />
      </View>
      <HeaderButton icon='book' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:wid,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  center:{
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
  },
});