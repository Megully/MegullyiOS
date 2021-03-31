import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import {Dimensions} from 'react-native';
import PlaceName from "./atoms/placeName.js";
import InfoArrowButton from "./atoms/infoArrowButton.js";
const wid = Dimensions.get('screen').width;
export default function PlaceInfoTop(props) {

  return (
    <TouchableOpacity style={styles.container} onPress={props.press} activeOpacity='1' >
      <PlaceName />
      <InfoArrowButton icon={props.toggle} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height:70,
    justifyContent: 'space-between',
    width:wid,
    flexWrap:'nowrap',
    flexDirection:'row',
    backgroundColor: '#0B3954',
    shadowColor: "#000",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
});