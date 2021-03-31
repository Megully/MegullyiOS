import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import PlaceImg from './atoms/placeImg.js';
import PlaceNameBody from './atoms/placeNameBody.js';
import PlaceAddress from './atoms/placeAddress.js';
import Dir from './atoms/dir.js';
const wid = Dimensions.get('screen').width;
export default function PlaceInfoTop(props) {
  return (
    <View style={styles.container}>
      <View style={styles.titles}>
        <PlaceImg />
        <View style={styles.aboutPlace}>
          <PlaceNameBody />
          <PlaceAddress/>
        </View>
      </View>
      <View style={styles.dirs}>
        <Dir />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:wid,
    flex:1,
    flexDirection:'column',
    backgroundColor:'#fff',
  },
  titles:{
    flexWrap:'wrap',
    flexDirection:'row',
    alignItems:'center',
    height:100,
  },
  aboutPlace:{
    width:240,
    flexDirection:'column',
    height:100,
    justifyContent:'center',
  },
  dirs:{
    flex:1,
  },
});