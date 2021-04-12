import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import PlaceImg from './atoms/placeImg.js';
import PlaceNameBody from './atoms/placeNameBody.js';
import PlaceAddress from './atoms/placeAddress.js';
import Dir from './atoms/dir.js';
import Colors from '../../../assets/colors.json';
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
    backgroundColor:Colors.colors.background,
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
    height:95,
    justifyContent:'center',
    borderBottomColor:Colors.colors.gray,
    borderBottomWidth:2,
  },
  dirs:{
    flex:1,
  },
});