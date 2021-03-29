import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;
import NavItems from "./molecules/navItems.js";
export default function NavBar() {
  return (
    <View style={styles.container}>
      <NavItems />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
    width:wid,
    marginTop: -20,
    zIndex:2,

  },
});