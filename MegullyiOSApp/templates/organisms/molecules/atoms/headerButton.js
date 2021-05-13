import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function HeaderButton(props) {
  return (
    <View style={styles.container}>
      <Icon.Button name={props.icon} size={props.size} color={Colors.colors.text} backgroundColor="#fff" style={styles.icon} onPress={props.onPress}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:10,
    alignItems: 'center',
  },
  icon:{
    width:60,
    height:57,
    marginRight:-16,

  },
});