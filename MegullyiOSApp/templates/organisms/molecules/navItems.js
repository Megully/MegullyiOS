import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import NavButton from "./atoms/navButton.js";
import Colors from '../../../assets/colors.json';
const wid = Dimensions.get('screen').width;
const color={
    selected:Colors.colors.mainColor,
    notSelected:Colors.colors.gray,
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