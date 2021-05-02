import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;
import NavItems from "./molecules/navItems.js";
import Colors from '../../assets/colors.json';
export default function NavBar() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: Colors.colors.shadow,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
    width:wid,
    marginTop: 0,
    zIndex:2,

  },
});