import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function InfoArrowButton(props) {
  return (
    <View style={styles.container}>
      <Icon name={props.icon} size={20} color={Colors.colors.textOnTab} backgroundColor={Colors.colors.accent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:12,
    marginRight:28,
    alignItems: 'center',
  },
});