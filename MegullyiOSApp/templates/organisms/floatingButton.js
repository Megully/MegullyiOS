import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../assets/colors.json';
import Icon from 'react-native-vector-icons/FontAwesome5';
const wid = Dimensions.get('screen').width;
const hei = Dimensions.get('screen').height;

export default function FloatingButton() {
  return (
    <View style={styles.container}>
        <Icon name="plus" size={25} color={Colors.colors.textOnTab} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 20,
    zIndex:1,
    width:wid,
    width:65,
    height:65,
    position:'absolute',
    bottom:50,
    right:20,
    backgroundColor:Colors.colors.accent,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:100,
    shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 1,
  },
});