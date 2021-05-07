import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;
export default function PlaceNameBody(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:10,
    marginBottom:10,
    marginLeft:10,
    flexWrap:'wrap',
    flexDirection:'row',
  },
  text: {
    fontSize:20,
    fontWeight:"800",
    color:Colors.colors.text,
  },
});