import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import NavButton from "./atoms/navButton.js";
const wid = Dimensions.get('screen').width;
const color={
    selected:'#E76F51',
    notSelected:'#C9C9C9',
};
export default function NavItems() {
  return (
    <View style={styles.container}>
      <NavButton icon="map-marker-alt" color={color.selected}/>
      <NavButton icon="edit" color={color.notSelected}/>
      <NavButton icon="book-open" color={color.notSelected}/>
      <NavButton icon="cog" color={color.notSelected}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex:1,
    justifyContent: 'space-around',
    width:wid,
    marginTop: -10,
    flexWrap:'nowrap',
    flexDirection:'row',
  },
});