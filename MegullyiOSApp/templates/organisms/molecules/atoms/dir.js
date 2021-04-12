import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../../../../assets/colors.json';
const wid = Dimensions.get('screen').width;
export default function Dir(props) {
  return (
    <View style={styles.container}>
        <View style={styles.dirs}>
            <Text style={styles.text}>残り</Text>
            <View style={styles.underLine}><Text style={styles.text2}>1.8km</Text></View>
        </View>
        <Text style={styles.text3}>残り10mまで近づくとスタンプを押せます</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10,
    width:wid,
    alignItems:'center',
    marginTop:-22,
  },
  dirs:{
    marginLeft:-30,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
  },
  underLine:{
    paddingLeft:10,
    borderBottomColor:Colors.colors.sub2,
    borderBottomWidth:10,
  },
  text: {
    fontSize:23,
    fontWeight:"600",
    color:Colors.colors.text,
    position:'relative',
    top:8,
    left:5,
  },
  text2: {
    fontSize:70,
    fontWeight:"700",
    color:Colors.colors.text,
    position:'relative',
    top:23,
  },
  text3: {
    fontSize:12,
    fontWeight:"500",
    color:Colors.colors.text,
    marginTop:5,
    alignItems:'center',
  },
});