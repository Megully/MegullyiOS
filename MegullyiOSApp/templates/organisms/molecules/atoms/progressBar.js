import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import * as Progress from 'react-native-progress';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function ProgressBar(props) {
  return (
    <View style={styles.container}>
      <Progress.Bar progress={parseFloat(props.progress)} width={200} color={Colors.colors.mainColor} unfilledColor={Colors.colors.gray}borderColor={Colors.colors.background}/>
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
    color:Colors.colors.text,
  },
});