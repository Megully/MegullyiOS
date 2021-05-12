import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;
export default function StampBookAuthor(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>作者:{props.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap:'nowrap',
    flexDirection:'row',
    marginLeft:0,
  },
  text: {
    fontSize:14,
    fontWeight:"700",
    color:Colors.colors.text,
    marginLeft:2,
    marginBottom:5,
    marginTop:-5,
  },
});