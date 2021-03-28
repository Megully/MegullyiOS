import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;

export default function Body() {
  return (
    <View style={styles.container}>
      <Image
          style={{
            width: wid,
            height: hei
          }}
          source={require('../../assets/map.png')}
        />
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