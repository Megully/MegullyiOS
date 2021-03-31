import Icon from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;

export default function InfoArrowButton(props) {
  return (
    <View style={styles.container}>
      <Icon name={props.icon} size={20} color='#fff' backgroundColor='#0B3954' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:11,
    marginRight:28,
    alignItems: 'center',
  },
});