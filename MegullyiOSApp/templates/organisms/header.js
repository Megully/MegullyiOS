import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import HeaderItems from './molecules/headerItems.js';
import Colors from '../../assets/colors.json';
import HeaderButton from './molecules/atoms/headerButton.js';
const wid = Dimensions.get('screen').width;

export default function Header(props) {
  return (
    <View style={styles.container}>
      <HeaderItems tabName={props.name}/>
      <HeaderButton icon='sort' style={styles.icon} size={21}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:68,
    backgroundColor: Colors.colors.background,
    width:wid,
    zIndex:2,
    marginBottom: -21,
    shadowColor: Colors.colors.shadow,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexWrap:'nowrap',
    flexDirection:'row',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 1,
  },
});