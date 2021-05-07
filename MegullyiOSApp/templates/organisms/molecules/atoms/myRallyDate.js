import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;
export default function MyRallyDate(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>最終更新:{props.date}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexWrap:'nowrap',
    flexDirection:'row',
    marginLeft:10,
  },
  text: {
    fontSize:14,
    fontWeight:"700",
    color:Colors.colors.text,
    marginLeft:4,
    marginTop:0.5,
  },
});