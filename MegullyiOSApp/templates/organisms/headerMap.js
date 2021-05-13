import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import HeaderItemsHome from './molecules/headerItemsHome.js';
import Colors from '../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function Header(props) {
  return (
    <View style={styles.container}>
      <HeaderItemsHome tabName="東京観光ツアー" onPress={props.onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height:90,
    backgroundColor: Colors.colors.background,
    alignItems: 'center',
    width:wid,
    zIndex:2,
    position:'relative',
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