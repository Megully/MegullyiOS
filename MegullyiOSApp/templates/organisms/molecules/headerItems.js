import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import HeaderButton from './atoms/headerButton.js';
import RallyTitle from './atoms/rallyTitle.js';
import ProgressText from './atoms/progressText.js';
import ProgressBar from './atoms/progressBar.js';
import Colors from '../../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function HeaderItems(props) {
  return (
    <View style={styles.container}>
        <RallyTitle tabName={props.tabName} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'row',
    alignItems: 'center',
    flexWrap:'nowrap',
    position:'relative',
    left:33,
    zIndex:2,
    justifyContent:'center',
  },

});