import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;
export default function PlaceImg(props) {
  return (
    <View style={styles.container}>
        <Image
          style={styles.img}
          source={require('../../../../assets/skyTree.jpg')}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
  },
  img:{
    width: 80,
    height: 80,
    margin:10,
    borderRadius:10,
  },
});