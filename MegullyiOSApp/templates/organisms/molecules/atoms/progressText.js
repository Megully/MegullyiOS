import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function ProgressText() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>4/8</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:5,
  },
  text: {
    fontSize:13,
    fontWeight:"600",
    color:Colors.colors.text,
  },
});