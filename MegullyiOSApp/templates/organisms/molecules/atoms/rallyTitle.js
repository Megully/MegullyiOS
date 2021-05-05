import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function RallyTitle(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.tabName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:2,
  },
  text: {
    fontSize:16,
    fontWeight:"600",
    color:Colors.colors.text,
  },
});