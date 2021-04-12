import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function HeaderButton(props) {
  return (
    <View style={styles.container}>
      <Icon name={props.icon} size={30} color={Colors.colors.text}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin:25,
    alignItems: 'center',
  },
});