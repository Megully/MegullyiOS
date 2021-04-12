import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import HeaderItems from './molecules/headerItems.js';
import Colors from '../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function Header() {
  return (
    <View style={styles.container}>
      <HeaderItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: Colors.colors.background,
    alignItems: 'center',
    width:wid,
    zIndex:2,
    marginBottom: -20,
    shadowColor: Colors.colors.shadow,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
});