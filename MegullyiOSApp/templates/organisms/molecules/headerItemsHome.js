import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import HeaderButton from './atoms/headerButton.js';
import RallyTitle from './atoms/rallyTitle.js';
import ProgressText from './atoms/progressText.js';
import ProgressBar from './atoms/progressBar.js';
import Colors from '../../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function HeaderItemsHome(props) {
  return (
    <View style={styles.container}>
      <HeaderButton icon='bars' size={30}/>
      <View style={styles.center}>
        <RallyTitle tabName={props.tabName}/>
        <ProgressText />
        <ProgressBar progress={0.5} width={200} />
      </View>
      <HeaderButton icon='book' size={30} onPress={props.onPress}/>
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