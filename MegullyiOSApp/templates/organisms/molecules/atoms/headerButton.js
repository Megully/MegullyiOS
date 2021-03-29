import Icon from 'react-native-vector-icons/FontAwesome';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;

export default function HeaderButton(props) {
  return (
    <View style={styles.container}>
      <Icon name={props.icon} size={30} color='#707070'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:25,
    alignItems: 'center',
  },
});