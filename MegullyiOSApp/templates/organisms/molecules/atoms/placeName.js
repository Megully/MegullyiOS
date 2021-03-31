import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;

export default function PlaceName() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>東京スカイツリー</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:2,
    marginLeft:30,
    marginTop:15,
  },
  text: {
    fontSize:16,
    fontWeight:"600",
    color:'#fff',
  },
});