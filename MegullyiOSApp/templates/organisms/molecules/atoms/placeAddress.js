import Icon from 'react-native-vector-icons/FontAwesome5';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Dimensions} from 'react-native';
const wid = Dimensions.get('screen').width;
export default function PlaceAddress(props) {
  return (
    <View style={styles.container}>
        <Icon name="map-marker-alt" size={18} color='#C9C9C9' />
        <Text style={styles.text}>東京都墨田区押上１丁目１−２</Text>
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
    fontSize:15,
    fontWeight:"600",
    color:'#707070',
    marginLeft:4,
    marginTop:-1,
  },
});