import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;
export default function PlaceInfoTop(props) {
  return (
    <View style={styles.container}>
        <Text>placeInfo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    width:wid,
    flexWrap:'nowrap',
    flexDirection:'row',
    flex:1,
    backgroundColor:'#fff',
  },
});