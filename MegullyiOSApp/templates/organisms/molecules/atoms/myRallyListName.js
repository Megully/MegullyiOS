import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;

export default function MyRallyListName(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:2,
    marginLeft:10,
    marginTop:15,
  },
  text: {
    fontSize:23,
    fontWeight:"600",
    color:Colors.colors.text,
  },
});