import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;


export default function NavButton(props) {
  return (
    <View style={styles.container}>
      <Icon name={props.icon} size={26} color={props.color}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft:20,
    paddingRight:20,
    marginTop:10,
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
  },
});