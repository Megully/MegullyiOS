import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;

export default function InfoArrowButton(props) {
  return (
    <View style={styles.container}>
      <Icon.Button name={props.icon} size={20} color='#fff' backgroundColor='#0B3954'></Icon.Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:5,
    marginRight:18,
    alignItems: 'center',
  },
});