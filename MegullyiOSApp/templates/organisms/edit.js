import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../assets/colors.json';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;

export default function Edit() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    zIndex:1,
    width:wid,
  },
});